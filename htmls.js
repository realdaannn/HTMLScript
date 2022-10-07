/* Copyright Daniel Rooke 18/08/2022 */
const fs = require('fs');

function htmlsvVersion(){
    return "v0.1"
}
function runscript(script){
    //sanitize the charater codes, replace with characters
    //console.log("sanitzing string:" + script)
    var tscript = "";
    var s2 = 0;
    for(var s = 0; s < script.length; s++){
        if(script[s] === '&'){
            //console.log("got ampersand" + script[s+2]);
            if(script[s+1] === 'l' && script[s+2] === 't'){
                //console.log("changing string")
                tscript += '<';
            }
            else if(script[s+1] === 'g' && script[s+2] === 't'){
                //console.log("changing string")
                tscript += '>';
            }
            //console.log(script[s] + script[s+1] + script[s+2] + script[s+3]);
            s+=3;
        }
        else{
            tscript += "" + script[s];
        }
    }
    //console.log("running:"+tscript)
    var rtrn = eval('(function() {'+tscript+'}())')
    //console.log("returned:" + rtrn);
    return rtrn;
}


function parseHTMLS(chunk){
    //console.log("parsing htmls")
    state = 0;
    //0-looking for \\
    //1-looking for {
    //2-adding code to runscript
    //3-looking for }, execute or goto 2
    //4-found directive
    //5-found i
    //6-skip to ' '
    //7-skip to name
    //7-add to include name
    //8-open and parse include

    //9-found s
    //10-skip to ' ' --style
    //11-skip to stylesheet name
    //12-add to stylesheet name
    //13-insert style tag for stylesheet
    var lastState = 0;
    var lastChar = '';
    var runstr = "";
    var rtrn = "";
    var rtrnlen = 0;
    var incname = "";
    var stylename = "";
    for(var c in chunk){
        //console.log("state:" + state)
        if(chunk[c] === '\\' && state === 0){
            //console.log("got backslash");
            state = 1;
        }
        else if(state === 1 && chunk[c] === '{'){
            //console.log("found code start");
            state = 2;
        }
        else if(state === 1 && chunk[c] === '#'){
            //console.log("found directive");
            state = 4;
        }
        else if(state === 2){
            if(chunk[c] === '\\'){
                //console.log("found backslash " + c + " " + (c+1));
                const t = parseInt(c) + 1;
                state = 3;
            }
            else{
                //add to runstr
                runstr += chunk[c];
            }
        }
        else if(state === 3){
            if(chunk[c] === '}'){
                //console.log("found curly brace");
                //execute the code
                //console.log("runstr::"+runstr);
                //console.log(runscript(runstr));
                rtrn += runscript(runstr);
                rtrnlen = rtrn.length;
                runstr = "";
                state = 0;
            }
            else{
                runstr += chunk[c];
                state = 2;
            }
        }
        else if(state === 4){
            if(chunk[c] === 'i'){
                state = 5;
                incname = "";
            }
            else if(chunk[c] === 's'){
                state = 9;
                stylename = "";
            }
            else{
                state = 0;
            }
        }
        else if(state === 5){
            if(chunk[c] === ' '){
                state = 6;
            }
            else{
                
            }
        }
        else if(state === 6){
            if(chunk[c] === ' '){

            }
            else{
                state = 7;
                incname = "";
                incname += chunk[c];
            }
        }
        else if(state === 7){
            if(chunk[c] === ';' || chunk[c] === '\n'){
                state = 8;
                //open and parse new file
                //console.log("opening:" + incname);
                var data = "";
                var rtrnOffset = rtrn.length;
                
                var filecontents = fs.readFileSync(incname, 'utf-8');
                //console.log(filecontents);
                filecontents = parseHTMLS(filecontents);
                rtrn += filecontents;
                incname = "";
                state = 0;
            }
            else{
                incname += chunk[c];
            }
        }
        else if(state === 9){
            if(chunk[c] === ' '){
                state = 10;
            }
            else{
                
            }
        }
        else if(state === 10){
            if(chunk[c] === ' '){

            }
            else{
                state = 11;
                stylename = "";
                stylename += chunk[c];
            }
        }
        else if(state === 11){
            if(chunk[c] === ';' || chunk[c] === '\n'){
                rtrn += '<link rel="stylesheet" href="' + stylename + '"/>';
                //console.log('<link rel="stylesheet" href="' + stylename + '"/>');
                state = 0;
            }
            else{
                stylename += chunk[c];
            }
        }
        else{
            rtrn += chunk[c];
        }
    }


    return rtrn;
}


exports.parseHTMLS = parseHTMLS;