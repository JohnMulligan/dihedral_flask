from flask import Flask,render_template,jsonify,send_from_directory,redirect
import os
import re
import plot_hits
import random
import json
# PA looks for an 'app' callable by default.
app = Flask(__name__)

@app.route('/')
@app.route('/<N>')
@app.route('/<N>/')
@app.route('/<N>/<sketch_name>')
def interactive_page(N=None,sketch_name=None):

	
	if N is None:
		return redirect("/12")
	else:
		N=str(N)
	
	processing_script_fnames=[f for f in os.listdir('static/%s' %N)
		if re.match('processing_[0-9]+_[0-9].*.js',f)
	]
	
	if sketch_name is None:
		sketch_selection=random.choice(processing_script_fnames)
		sketch_name_formatted=re.sub("processing_",'p_',sketch_selection)
		sketch_name_formatted=re.sub("\.js",'',sketch_name_formatted)
		sketch_name_formatted=re.sub("\.",'_',sketch_name_formatted)
		sketch_name=sketch_name_formatted
	
	context={
		'processing_script_fnames':processing_script_fnames,
		'N':N,
		'sketch_name':str(sketch_name)
	}
	
	
    
	return render_template('interactivepage.html', **context)

@app.route('/plotly_json/<N>')
def plotly_json(N):
	plotly_dict=plot_hits.main(N)
	
	return jsonify(plotly_dict)

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()