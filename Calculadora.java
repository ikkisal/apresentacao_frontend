import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Leitura dos números
        System.out.print("Digite o primeiro operando: ");
        double numero1 = scanner.nextDouble();
        
        System.out.print("Digite o segundo operando: ");
        double numero2 = scanner.nextDouble();
        
        // Limpeza do buffer
        scanner.nextLine();

        // Leitura da operação
        System.out.print("Qual operacao deseja realizar?\n + para somar\n - para subtrair\n * para multiplicacao\n / para divisao\nEscolha uma operacao: ");
        String operacao = scanner.nextLine();
        
        double resultado = 0;
        boolean operacaoValida = true;

        // Calcula o resultado baseado na operação escolhida
        switch (operacao) {
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                if (numero2 != 0) {
                    resultado = numero1 / numero2;
                } else {
                    System.out.println("Erro: Divisao por zero.");
                    operacaoValida = false;
                }
                break;
            default:
                System.out.println("Operacao invalida. Reinicie o programa e coloque uma operacao valida.");
                operacaoValida = false;
                break;
        }

        // Imprime o resultado se a operação for válida
        if (operacaoValida) {
            System.out.println("O resultado foi: " + resultado);
        }

        scanner.close();
    }
}