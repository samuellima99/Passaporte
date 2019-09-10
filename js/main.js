var nome = document.querySelector("#nome");
var endereco = document.querySelector("#end");
var cidade = document.querySelector("#cidade");
var uf = document.querySelector("#uf");
var tel = document.querySelector("#tel");
var cel = document.querySelector("#cel");
var email = document.querySelector("#email");
var prof = document.querySelector("#prof");
var rg = document.querySelector("#rg");
var cnh = document.querySelector("#cnh");
var cpf = document.querySelector("#cpf");
var titulo = document.querySelector("#titulo");
var sim = document.querySelector("#sim");
var nao = document.querySelector("#nao");
var campoPassaporte = document.querySelector(".campoPassaporte");
var passaporte = document.querySelector("#passaporte")
var selectOptions = document.querySelector("#select");
const msg = document.querySelector("#msg");

nome.onblur = function (params) {
    if (nome.value.length != 0) {
        MaskJS(nome).mascararLetras();
    } else if (nome.value.length == 0) {
        msgNome.innerText = "O campo nome deve ser preenchido.";
    } else if (nome.value.length < 10) {
        msgNome.innerText = "O campo nome deve possuir pelo menos 10 letras.";
    } else {
        msgNome.innerText = "";
    }
}

endereco.onblur = function (params) {
    if (endereco.value.length != 0) {
        MaskJS(endereco).mascararAlfanumerico();
    } else if (endereco.value.length == 0) {
        msgEnd.innerText = "O campo endereço deve ser preenchido.";
    } else {
        msgEnd.innerText = "";
    }
}

cidade.onblur = function (params) {
    if (cidade.value.length != 0) {
        MaskJS(cidade).mascararAlfanumerico();
    } else if (cidade.value.length == 0) {
        msgCidade.innerText = "O campo cidade deve ser preenchido.";
    } else {
        msgCidade.innerText = "";
    }
}

uf.onblur = function (params) {
    if (uf.value.length != 0) {
        MaskJS(uf).mascararLetras();
    } else if (uf.value.length == 0) {
        msgUF.innerText = "O campo UF deve ser preenchido.";
    } else {
        msgUF.innerText = "";
    }
}

tel.onblur = function (params) {
    if (tel.value.length != 0) {
        MaskJS(tel).mascararPadrao("(99) 9999-9999");
    } else if (tel.value.length == 0) {
        msgTel.innerText = "O campo telefone deve ser preenchido.";
    } else {
        msgTel.innerText = "";
    }
}

cel.onblur = function (params) {
    if (cel.value.length != 0) {
        MaskJS(cel).mascararPadrao("(99)9-9999-9999");
    } else if (cel.value.length == 0) {
        msgCel.innerText = "O campo celular deve ser preenchido.";
    } else {
        msgCel.innerText = "";
    }
}

email.onblur = function () {
    let pardao = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;
    if (email.test(pardao)) {
        msgEmail.innerText = "";
    } else if (email.length == 0) {
        msgEmail.innerText = "O campo email deve ser preenchido.";
    } else {
        msgEmail.innerText = "Invalido!";
    }
}

prof.onblur = function (params) {
    if (prof.value.length != 0) {
        MaskJS(prof).mascararLetras();
    } else if (prof.value.length == 0) {
        msgProf.innerText = "O campo profissão deve ser preenchido.";
    } else {
        msgProf.innerText = "";
    }
}

rg.onblur = function (params) {
    if (rg.value.length != 0) {
        MaskJS(rg).mascararPadrao("99999999-99");
    } else if (rg.value.length == 0) {
        msgRg.innerText = "O campo RG deve ser preenchido.";
    } else {
        msgRg.innerText = "";
    }
}

cnh.onblur = function (params) {
    if (cnh.value.length != 0) {
        MaskJS(cnh).mascararPadrao("99999999999");
    } else if (cnh.value.length == 0) {
        msgCnh.innerText = "O campo CNH deve ser preenchido.";
    } else {
        msgCnh.innerText = "";
    }
}

cpf.onblur = function (params) {
    if (cpf.value.length != 0) {
        MaskJS(cpf).mascararPadrao("999.999.999-99");
    } else if (cpf.value.length == 0) {
        msgCpf.innerText = "O campo CPF deve ser preenchido.";
    } else {
        msgCpf.innerText = "";
    }
}

titulo.onblur = function (params) {
    if (titulo.value.length != 0) {
        MaskJS(titulo).mascararPadrao("9999 9999 9999");
    } else if (titulo.value.length == 0) {
        msgTitulo.innerText = "O campo titulo de eleitor deve ser preenchido.";
    } else {
        msgTitulo.innerText = "";
    }
}

sim.onclick = function (params) {
    campoPassaporte.style.display = "block";
}

nao.onclick = function (params) {
    campoPassaporte.style.display = "none";
}

passaporte.onblur = function (params) {
    if (passaporte.value.length != 0) {
        MaskJS(passaporte).mascararPadrao("AA999999");
    } else if (passaporte.value.length == 0) {
        msgPassaporte.innerText = "O campo passaporte deve ser preenchido.";
    } else {
        msgPassaporte.innerText = "";
    }
}





