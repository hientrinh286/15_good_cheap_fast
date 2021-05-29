function change_check_good() {   
    if (document.getElementById('cheap').checked == true && document.getElementById('fast').checked == true){
        document.getElementById('fast').checked=false;
    }
}
function change_check_cheap() {
    if (document.getElementById('fast').checked == true && document.getElementById('good').checked == true){ 
        document.getElementById('good').checked=false;
    }
}
function change_check_fast() {
    if (document.getElementById('good').checked == true && document.getElementById('cheap').checked == true){
        document.getElementById('cheap').checked=false;
    }
}