        
        //Вычисление суммы матриц 2х2
        let display1 = document.querySelector('#matrix1'); 
        let display2 = document.querySelector('#matrix2');

        display1.addEventListener('change', () =>{  
            display2.addEventListener('change', () =>{

                let a = display1.value.split("\n");
                
                for (let i in a) {
                    a[i] = a[i].split(" ");
                }

                let b = display2.value.split("\n");
                
                for (let i in b) {
                    b[i] = b[i].split(" ");
                }  

                        let matrix =[];

                        for (let i in a) {
                            matrix[i] =[];
                            for (let j in a[i]) {
                            
                                matrix[i][j] = +(a[i][j])+ +(b[i][j]);
                            }  
                        
                        } 
                        //console.log(matrix[0][0]);

                         const S = katex.renderToString("\\begin{pmatrix}" + 
                        matrix[0][0] +"&"+ matrix[0][1] +"&"+ matrix[0][2] +"\\newline" +
                        matrix[1][0] +"&"+ matrix[1][1] +"&"+ matrix[1][2] +"\\newline" +
                        matrix[2][0] +"&"+ matrix[2][1] +"&"+ matrix[2][2] +
							"\\end{pmatrix}", { throwOnError: false});

                            document.querySelector("#resSum").innerHTML = S;
                    
                console.log(matrix);

         }) })

        //Вычисление определителя 2х2

                 let A = document.querySelector('#matrixA'); 
                    A.addEventListener('change', () =>{  

                        
                        let det;

                        let a = A.value.split("\n");
                    
                            for (let i in a) {
                             a[i] = a[i].split(" ");
                              }

                              det= +a[0][0] * +a[1][1] - +a[1][0] * +a[0][1];


                            console.log(a);
                            document.querySelector("#DetA").innerHTML = det;
                    
                })

        //Вычисление определителя 3х3

                let B = document.querySelector('#matrixB'); 
                B.addEventListener('change', () =>{  
                    
                    let det;

                    let a = B.value.split("\n");
                
                        for (let i in a) {
                         a[i] = a[i].split(" ");
                          }

                          det= +a[0][0] * +a[1][1]* +a[2][2] +
                                +a[0][1] * +a[1][2]* +a[2][0] +
                                +a[0][2] * +a[1][0]* +a[2][1] -

                                +a[2][0] * +a[1][1]* +a[0][2] -
                                +a[2][2] * +a[1][0]* +a[0][1] -
                                +a[2][1] * +a[1][2]* +a[0][0];
                                    
                        console.log(a);
                        document.querySelector("#DetB").innerHTML = det;
                
            })

            //Вычисление определителя 4х4

            let C = document.querySelector('#matrixC'); 
            C.addEventListener('change', () =>{  
                
                let det;

                let a = C.value.split("\n");
            
                    for (let i in a) {
                     a[i] = a[i].split(" ");
                      }

                      det = +a[0][0]*(+a[1][1] * +a[2][2]* +a[3][3] +
                            +a[1][2] * +a[2][3]* +a[3][1] +
                            +a[1][3] * +a[2][1]* +a[3][2] -
                            +a[3][1] * +a[2][2]* +a[1][3] -
                            +a[3][3] * +a[2][1]* +a[1][2] -
                            +a[3][2] * +a[2][3]* +a[1][1]) +

                             -a[1][0]*(+a[0][1] * +a[2][2]* +a[3][3] +
                                +a[0][2] * +a[2][3]* +a[3][1] +
                                +a[0][3] * +a[2][1]* +a[3][2] -
                                +a[3][1] * +a[2][2]* +a[0][3] -
                                +a[3][3] * +a[2][1]* +a[0][2] -
                                +a[3][2] * +a[2][3]* +a[0][1]) +

                                +a[2][0] *(+a[0][1] * +a[1][2]* +a[3][3] +
                                    +a[0][2] * +a[1][3]* +a[3][1] +
                                    +a[0][3] * +a[1][1]* +a[3][2] -
                                    +a[3][1] * +a[1][2]* +a[0][3] -
                                    +a[3][3] * +a[1][1]* +a[0][2] -
                                    +a[3][2] * +a[1][3]* +a[0][1]) +

                                    -a[3][0] *(+a[0][1] * +a[1][2]* +a[2][3] +
                                        +a[0][2] * +a[1][3]* +a[2][1] +
                                        +a[0][3] * +a[1][1]* +a[2][2] -
                                        +a[2][1] * +a[1][2]* +a[0][3] -
                                        +a[2][3] * +a[1][1]* +a[0][2] -
                                        +a[2][2] * +a[1][3]* +a[0][1]);

                             
                    console.log(a);
                    document.querySelector("#DetC").innerHTML = det;
            
        })




                 
  
        

        