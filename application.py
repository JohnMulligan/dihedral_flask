from flask import Flask,render_template,jsonify,send_from_directory
import os
import re
import plot_hits
import json
# EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route('/<N>')
def interactive_page(N):

	N=str(N)
	
	processing_script_fnames=[f for f in os.listdir('static/%s' %N)
		if re.match('processing_[0-9]+_[0-9].*.js',f)
	]
	
	print(processing_script_fnames)
	
	context={
		'processing_script_fnames':processing_script_fnames,
		'N':N
	}
    
	return render_template('interactivepage.html', **context)

@application.route('/plotly_json/<N>')
def plotly_json(N):
	plotly_dict=plot_hits.main(N)
	
	return jsonify(plotly_dict)

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()