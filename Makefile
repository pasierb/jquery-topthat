# Build Directory
BUILD_DIR=build/
JS_LIB=lib/js/jquery.topthat.coffee
JS_BUILD_PREFIX=build/js/jquery.topthat
 
# minify JavaScript with UgilifyJS
js:
	rm ${BUILD_DIR}js/*
	coffee -o ${BUILD_DIR}/js lib/js/jquery.topthat.coffee
	uglifyjs -o ${JS_BUILD_PREFIX}.min.js ${JS_BUILD_PREFIX}.js
	cp ${JS_BUILD_PREFIX}.js public/javascripts/

css:
	rm public/stylesheets/topthat.css
	cp ${BUILD_DIR}css/topthat.css public/stylesheets/
 
.PHONY: js css