function signup() {
    document.getElementById('sign_bx_blck').style.display = 'block';
    document.getElementById('all').style.opacity = '0.5';
}

function show() {
    document.getElementById('fa_show').style.display = 'none';
    document.getElementById('fa_hide').style.display = 'block';
}

function hide() {
    document.getElementById('fa_show').style.display = 'block';
    document.getElementById('fa_hide').style.display = 'none'; 
}

function window_cut() {
    document.getElementById('sign_bx_blck').style.display = 'none';
    document.getElementById('all').style.opacity = '1';
}
