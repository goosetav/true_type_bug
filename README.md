## Simple Rails App to reproduce jonleighton/poltergeist#44 ##

see jonleighton/poltergeist#44

### Setup: ###

1. ```cd /your/project/place && git clone git@github.com:goosetav/true_type_bug.git```
1. ```bundle install```
1. BYOWS - wire it up to serve locally (I use http://pow.cx)

### Reproduce the bug via poltergeist ###
1. run spec
1. ```bundle exec rspec``` -- *this should cause a crash (under Mac OSX Mountain Lion at least)*
  
### Do basically the same thing using PhantomJS directly ###
1. (in root of the project) ```phantomjs test-phantom.js``` -- *this will not crash and instead takes two screenshots*

### To prevent the bug via poltergeist ###
1. goto ```apps/assets/application.css.scss```
1. comment out line #20 ```@import 'true_type_bug'```
1. ```bundle exec rspec``` -- *this will not fail now*