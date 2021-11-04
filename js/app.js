let container = document.getElementById("seccion");

const comprarTicket=()=>{
    container.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-4">
                    <div class="card-group">
                        <div class="card cartas">
                            <div class="card-body border border-info">
                                <h5 class="card-title text-center p-2 fs-4"><b>Estudiante</b></h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center fs-5"><b>80%</b></p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card cartas">
                        <div class="card-body border border-success">
                            <h5 class="card-title text-center p-2 fs-4"><b>Trainee</b></h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center fs-5"><b>50%</b></p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                    * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card cartas" >
                    <div class="card-body border border-warning">
                        <h5 class="card-title text-center p-2 fs-4"><b>Junior</b></h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center fs-5"><b>15%</b></p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                                * presentar documentación
                            </small>
                        </p>
                    </div>
                </div>
                    </div>
                </div>            
            </div>
            <div class="row">
                <div class="col text-uppercase text-center mt-2">
                    <small>venta</small>
               <h2> Valor de ticket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                            <div class="d-flex">
                                <div class="form-group col-6 col-md-6 m-1 mb-4">
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1 mb-4"">
                                    <input type="text" class="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-12 m-1 mb-4"">
                                <input type="email" class="form-control" placeholder="Correo"/> 
                            </div>
                            <div class="d-flex">
                                <div class="form-group col-6 col-md-6 m-1 mb-4"">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas" type="number" class="form-control" placeholder="Cantidad"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1 mb-4"">
                                <label for="">Categoria</label>
                                <select class="form-select" id="inputSelect">
                                    <option value="estudiante">Estudiante</option>
                                    <option value="trainee">Trainee</option>
                                    <option value="junior">Junior</option>
                                </select>
                                
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-4">
                            <div class="alert alert-primary p-3" role="alert" id="totalApagar">
                                Total a pagar: $
                            </div>
                        </div>
                        <div class="form-row d-flex">
                       
                            <button class="btn col-6 rounded-2 mt-4 mb-3 text-white fs-5 border-0 m-1" id="button_lime" onclick="borrar()">Borrar</button>
                    
                            <button type="button" class="btn col-6 rounded-2 mt-4 mb-3 text-white fs-5 border-0 m-1" onclick="resumenValor()" id="button_lime">Resumen</button>
                        
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn mt-2 mb-3 rounded-2" id="volver" onClick="history.back()">Volver</button>
                        </div>  

                    </form>
                </div>
            </div>
        </div>
    `;
};


let precioTicket = 200;

let estudiantes = (precioTicket)-(precioTicket * 0.80);
let trainee = (precioTicket)-(precioTicket * 0.50);
let junior = (precioTicket)-(precioTicket * 0.15);


const resumenValor=()=>{
    let cantidad = document.getElementById("cantidadEntradas").value;
    let categoria = document.getElementById("inputSelect").value;
    let totalApagar = document.getElementById("totalApagar");
    
    if(categoria === "estudiante") {
        totalApagar.innerHTML = estudiantes * (cantidad);
    } else if (categoria === "trainee") {
        totalApagar.innerHTML = trainee * (cantidad);
    } else if (categoria === "junior") {
        totalApagar.innerHTML = junior * (cantidad);
    } else if (cantidad, categotia === " ") {
        totalApagar=0;
    }else{
        totalApagar=0;
    }
        
};


const borrar=()=>{
    comprarTicket()

}







