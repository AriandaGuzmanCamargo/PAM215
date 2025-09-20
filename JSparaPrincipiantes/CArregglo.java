class CArreglo{
    static double obtenerPromedio(int a[]){

        static void imprimir(int a[]){
            for(int i = 0; i<a.leght; i++){
                System.out.print(a[i] + "-");
                System.out.println();
            }
        }
    }

    public static void main(String args[]){
        int edades[] ={19,23,21,20,24,20};

        imprimir(edades);
        System.out.println(obtenerPromediobtenerPromedio(edades));
    }
}