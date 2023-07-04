import os
import plotly.graph_objects as go
import plotly.express as px
import numpy as np
import json
import pandas as pd
import sys

def readtxtfile(filepath):
	d=open(filepath)
	t=d.read()
	d.close()
	return(t)

def df_from_consolidatedfile(consolidatedfile):
	consolidated=readtxtfile(consolidatedfile)
	consolidatedlines=[c for c in consolidated.split('\n\n') if c!='']
		
	records=[]
	
	for line in consolidatedlines:
		record=json.loads(line)
		n,np_id=[int(i) for i in record['this_folding_np_id'].split('_')]
		record['n']=n
		record['np_id']=np_id
		records.append(record)
	df=pd.DataFrame.from_records(records)
	df=df.sort_values(by=['np_id'])
	print(df, df['this_folding_np_id'])
	return df

def main(N):
	N=int(N)
	
	consolidatedfile='static/%d/consolidated.txt' %N
	df=df_from_consolidatedfile(consolidatedfile)
	
	localmaxes={angle:{
			'np_id':[],
			'close_neighborings_count':[]
		}
		for angle in df['angle'].unique()	
	}
	
	localmax_angles=[]
	localmax_np_ids=[]
	localmax_hitcount=[]

	for angle in df['angle'].unique():
# 		print(angle)
		df2=df[['angle','np_id','n','close_neighborings_count']]
		df2=df2[df2['angle']==angle]
		hitsarray=list(df2['close_neighborings_count'].values)
		np_ids=list(df2['np_id'].values)
		angles=list(df2['angle'].values)
		
		for idx in range(len(hitsarray)):
			this_val=hitsarray[idx]
			if idx not in (0,len(hitsarray)-1):
				prev_val=hitsarray[idx-1]
				next_val=hitsarray[idx+1]
				if prev_val < this_val and next_val < this_val:
					#basic peak
					localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
					localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
				elif next_val==this_val and prev_val < this_val:
					#beginning of plateau
					localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
					localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
				elif prev_val==this_val and next_val < this_val:
					#end of plateau
					localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
					localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
			if len(hitsarray)==1:
					localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
					localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
			else:
				if idx==len(hitsarray)-1:
					prev_val=hitsarray[idx-1]
					if prev_val < this_val:
						#last if max
						localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
						localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
				if idx==0:
					next_val=hitsarray[idx+1]
					if next_val < this_val:
						#first if max
						localmaxes[angles[idx]]['np_id'].append(np_ids[idx])
						localmaxes[angles[idx]]['close_neighborings_count'].append(hitsarray[idx])
	
	label_max_chars=5
	
	anglelabelmap={str(angle):str(angle)[:label_max_chars] for angle in df['angle'].unique()}
	print("=------>",anglelabelmap)
	fig = px.line_3d(
		df,
		x="angle",
		y="np_id",
		z="close_neighborings_count",
		color='angle',
		labels=anglelabelmap
	)
	
	clickables=[]
	
	for idx in range(len(fig.data)):
		print(fig.data[idx].name)
		newname=anglelabelmap[fig.data[idx].name]
		print("-->",newname)
		fig.data[idx].name=newname
	
	for angle in localmaxes:
		
		np_ids=localmaxes[angle]['np_id']
		close_neighborings_counts=localmaxes[angle]['close_neighborings_count']
		angles=[angle for i in range(len(np_ids))]
		
		fig.add_trace(
			go.Scatter3d(
				x=angles,
				y=np_ids,
				z=close_neighborings_counts,
				mode='markers',
				name=str(angle)[:label_max_chars]
			)
		)
		
		for idx in range(len(np_ids)):
			
			np_id=np_ids[idx]
			
			angleunderscore=str(angle).replace('.','_')
		
			clickables.append('_'.join([str(i) for i in ['p',N,np_id,angleunderscore]]))
	
	
	
	fig.update_layout(scene = dict(
		xaxis_title="angle",
		yaxis_title="np_id",
		zaxis_title="hit count"
	))
	
	figjson=json.loads(fig.to_json())
	
	return {'fig':figjson,'clickables':clickables}

# 	fig.show()

if __name__=="__main__":
	N=int(sys.argv[1])
	main(N)
