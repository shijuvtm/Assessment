import java.util.Scanner;

public class Calculator {
    double cal(double a, double b, String op) {
        if(op.equals("add")) {
            return a + b;
        }
        else if(op.equals("subtract")) {
            return a - b;
        }
        else if(op.equals("multiply")) {
            return a * b;
        }
        else if(op.equals("division")) {
            if(b == 0) {
                System.out.println("Cannot divide");
                return 0;
            } else {
                return a / b;
            }
        }
        return 0;
    }
}

public class Main {
    public static void main(String[] args) {
        double a, b, result;
        String op;
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the first number:");
        a = sc.nextDouble();

        System.out.println("Enter the second number:");
        b = sc.nextDouble();

        sc.nextLine();
        System.out.println("Enter the operation (add, subtract, multiply, division):");
        op = sc.nextLine().toLowerCase();

        Calculator c = new Calculator();
        result = c.cal(a, b, op);

        System.out.println("Result: " + result);
    }
}
