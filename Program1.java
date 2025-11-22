import java.util.*;

public class Calculator{
   double cal(double a, double b, String op){
     if(op.equals("addition")){
       return a+b;
     }
     else if(op.equals("subtraction"))
     {
       return a-b;
     }
     else if(op.equals("multiplication")){
       return a*b;
     }
     else if(op.equals("division")){
       if (b==0){
         System.out.println("Cannot divide");
          return 0;
       } else {
               return a / b;
            }
       }
       return 0;
     }
}
public class Main{
  public static void main(String args[]){
    double a, b, result;
    String op;
    Scanner sc= new Scanner(System.in);
    System.out.println("Enter the inputs a and b");
    a=sc.nextDouble();
    b=sc.nextDouble();
    sc.nextLine();
    System.out.println("enter the Operation (addition, multiplication,division, substraction) ");
    op=sc.nextLine().toLowerCase();
    Calculator c=new Calculator();
    result=c.cal(a,b,op);
    System.out.println("Result is:"+result);
    }
}

