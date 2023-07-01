from flask import Flask,render_template
import os
import re

# EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route('/<N>')
def my_view_func(N):

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


# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()