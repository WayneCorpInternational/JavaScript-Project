public class Atividade1DoWhile1 {

    public static void main(String[] args) {
        
        //variaveis
        
        int n=0;
        int soma = 0;
        Scanner mySc = new Scanner(System.in);
        
        //continhas
        
        do {
            System.out.print("Digite o valor de N: ");
            n = mySc.nextInt();
            if(n > 0) {
                soma = soma + n;
            }
            
        }while(n !=0);
        
        //saidas
        
        System.out.printf("A soma dos números digitados é "+soma);

}

}