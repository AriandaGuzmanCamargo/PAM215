function verificarUsuario(usuario) {
    return new Promise((res, err) => {
        if (usuario === "admin") {
            res("Acceso Consedido");
        } else {
            err("Acceso Denegado");
        }
    });
} 
verificarUsuario("admin")
    .then(res => console.log(res))//acceso consedido
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));//acceso err
