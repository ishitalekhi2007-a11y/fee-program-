
// class main(){
//     string name;
//     static string company="Infosys";
//     Employee(string n){
//         name = n;
//     }
//     void display(){
//         System.out.println(name+"works in"+company);
//     }
//     public statiic void main(string[] args){
//         Employee e1 = new Employee("Rahul");
//         Employee e2 = new Employee("Priya");
//         e1.display();
//         e2.display();
//     }
// }

// class main(){
//     string name;
//     int roll no;
//     static string college = "CGC";

//     Student(String n, int r){
//         name =n;
//         rollno = r;
//     }
//     void display(){
//         System.out.println(name + " "+rollno + " "+college);
//     }
//     public static void main(String[] args){
//         Student s1 = new Student("Aman",101);
//         Student s2 = new Student("Ishita",102);
//         Student s3 = new Student("Priya",103);
//         s1.display();
//         s2.display();
//         s3.display();
//     }
// }

// class main(){
//     String carname;
//     static  String company = "Maruti";

//     car(String c){
//         carname = c;
//     }
//     void display() {
//         System.out.println(carname + " " + company)
//     }
//     public static void main(String[] args){
//         car c1 = new car("Swift");
//         car c2 = new car("Baleno");

//         c1.display();
//         c2.display();
//     }
// }

// class calculator{
//     static void add(int a,int b){
//         System.out.println("Addition="+(a+b));
        
//     }
//     static void subtract(int a,int b){
//         System.out.println("Subtraction="+(a-b));
//     }
//     static void multiply(int a,int b){
//         System.out.println("Multipication="+(a*b));
//     }
//     static void Divide(int a,int b){
//         System.out.println("Division="+(a/b));
//     }
//     public static void main(String[] args){
//         calculator.add(10,20);
//         calculator.subtract(10,20);
//         calculator.multiply(10,20);
//         calculator.Divide(10,20);
//     }
// }

// import java.util.Scanner;
// class Student{
//     int id;
//     String name;
//     static int TotalStudents=0;

//     Student(int id , String name){
//     this.id = id;
//     this.name = name;
//     TotalStudents++;
//     }
//     void display(){
//         System.out.println("Student ID:", id);
//         System.out.println("Student Name:",name);

//     }
// }
// public class{
// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     int n = sc.nextInt();
//     Student students[] = new Student[n];
//     for(int i=0;i<n;i++){
//         int id = sc.nextInt();
//         sc.nextLine();
//         String name = sc.nextLine();
//         students[i] = new Student(id,name);
//     }
//     for(int i=0;i<n;i++){
//         students[i].display();
//     }
//     System.out.println("Total Students ="+Student.TotalStudents);
// }
// }

// class Employee{
//     String name;
//     int salary;
//     Employee(String name,int salary){
//         this.name = name;
//         this.salary = salary;
//     }
// }
// class Manager extends Employee{
//     int bonus;
//     Manager(String name,int salary,int bonus){
//         super(name,salary);
//         this.bonus=bonus;
//     }
//     void displayManager(){
//         displayEmployee();
//         System.out.println("Bonus:"+bonus);
//         System.out.println("Total Salary:"+(salary+bonus));

//     }
// }
// public class main{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int  arr[] = new int[n];
//         for(int i=0;i<n;i++){
//             arr[i] = sc.nextInt();
//         }
//         int min = arr[0];
//         for(int i=0;i<n;i++){
//             if(min>arr[i]){
//                 min= arr[i];
//             }
//         }
//         System.out.println("the number is minimum"+min);
//     }
// // }
// import java.util.Scanner;
//     public static class Student{
//     String name;
//     int rno;
//     double cgpa;
// }
// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     Student s1 = new Student();
//     s1.name = "Khushi";
//     s1.rno = 22;
//     s1.cgpa = 8.5;
//     Student s2 = new Student();
//     s2.name = "rohit";
//     s2.rno = 90;
//     s2 .cgpa = 3.4; 
//     Student s3 = new Student();
//     s3.name = "prisha";
//     s3.rno = 89;
//     s3.cgpa = 6.7;
//     System.out.println(s1.name+" "+s1.cgpa+" "+s1.rno);
//     s2.cgpa=9.8;
//     System.out.println(s3.rno);
// }

// import java.util.Scanner;
// class product{
//     int productId;
//     String productName;
//     double price;
//     int quantity;
//     product(int id,String name,double price,int quantity){
//         this.productId = id;
//         this.productName = name;
//         this.price = price;
//         this.quantity = quantity;

//     }
//     double getTotal(){
//         return price * quantity;
//     }
//     void display(){
//         System.out.println(productId+"\t"+productName+"\t"+price+"\t"+quantity+"\t"+getTotal());
//     }
// }
// public class main{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         product[]products = new product[n];
//         for(int i=0;i<n;i++){
//             System.out.print("product ID:");
//             int id = sc.nextInt();
//             sc.nextLine();
//             System.out.print("product name:");
//             String name = sc.nextLine();
//             System.out.print("price:");
//             double price = sc.nextInt();
//             System.out.print("quantity:");
//             int quantity = sc.nextInt();
//             products[i] = new product(id,name,price,quantity);
//         }
//         double grandTotal = 0;
//         System.out.println("\n========SHOPPING BILL==========");
//         System.out.println("ID\tName\tprice\tqty\tTotal");
//         for(int i=0;i<n;i++){
//             products[i].display();
//             grandTotal += products[i].getTotal();
//         }
//         System.out.println("----------------------------");
//         System.out.println("final bill amount="+grandTotal);
//         sc.close();
//     }
// }

// import java.util.*;
// public class main{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String s = sc.nextLine();
//         String[] words = s.split(" ");
//         for(int i=0;i<words.length;i++){
//             String rev ="";
//             for(int j=words[i].length()-1;j>=0;j--){
//             rev += words[i].charAt(j);
//         }
//         System.out.print(rev+" ");
//     }
// }
// }

// import java.util.*;
// public class main{
//     public static void main(String[] args){
//        Scanner sc = new Scanner(System.in);
//        int n = sc.nextInt();
//        int m = sc.nextInt();
//        int[][]a  = new int[n][m];
//        for(int i=0;i<n;i++){
//         for(int j =0;j<m;j++){
//             a[i][j] = sc.nextInt();
//         }
//        }
//        int sum =0;
//        for(int i=0;i<n;i++){
//         for(int j=0;j<m;j++){
//             if(i==0|| i==n-1|| j==0||j==m-1){
//                 sum += a[i][j];
//             }
//         }
//        }
//  System.out.println(sum);
//     }
// }

// class Student {
//     String name;
//     int age;
//     public static void main(String[] args){
//         Student s1 = new Student();
//         s1.name = "Ishita";
//         s1.age = 19;
//         System.out.println(s1.name);
//         System.out.println(s1.age);
//     }

// }
// import java.util.Scanner;
// class rectangle{
//     int length;
//     int breadth;

// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     rectangle r1 = new rectangle();
//     r1.length = sc.nextInt();
//     r1.breadth = sc.nextInt();
//     int area = r1.length * r1.breadth;
//     System.out.println(area);

// }
// }    

// import java.util.Scanner;
// class Employee{
//     String name;
//     int salary;
//     public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     Employee e1 = new Employee();
//     e1.name = sc.nextLine();
//     e1.salary = sc.nextInt();
//     System.out.println(e1.name);
//     System.out.println(e1.salary);

// }
// }


// import java.util.Scanner;
// class Student{
//      String name;
//      int marks1;
//      int marks2;
//      int marks3;
// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     Student s1 = new Student();
//     s1.name = sc.nextLine();
//     s1.marks1 = sc.nextInt();
//     s1.marks2 = sc.nextInt();
//     s1.marks3 = sc.nextInt();
//     int total = s1.marks1 + s1.marks2 + s1.marks3;
//     double average = total/3.0;
//     System.out.println(s1.name);
//     System.out.println(s1.marks1);
//     System.out.println(s1.marks2);
//     System.out.println(s1.marks3);
//     System.out.println(total);
//     System.out.println(average);
// }
// // }
// import java.util.Scanner;        
// class product{
//     String name;
//     int price;
//     int quantity;

// public static void main(String[] args){
//      Scanner sc = new Scanner(System.in);
//      product p1 = new product();
//      p1.name = sc.nextLine();
//      p1.price = sc.nextInt();
//      p1.quantity = sc.nextInt();
//      int total = p1.price*p1.quantity;
//      System.out.println("Product:"+p1.name);
//      System.out.println("Total:"+total);

// }
// // }
//     String name;
//     double price;
//     int quantity;
//     double calculateTotal(){
//         return price*quantity;
//     }
//     double calculateDiscount(double total){
//         if(total>=5000){
//             return total*20/100;
//         }
//         else if(total>=3000){
//             return total*10/100;
//         }else{
//             return 0;
//         }
//     }
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         product p = new product();
//         p.name = sc.nextLine();
//         p.price = sc.nextDouble();
//         p.quantity = sc.nextInt();
//         double total = p.calculateTotal();
//         double discount = p.calculateDiscount(total);
//         double finalAmount = total - discount;
//         System.out.println("Total="+total);
//         System.out.println("Discount="+discount);
//         System.out.println("Final Amount="+finalAmount);
//     }
// }
//     static int add(int a,int b){
//         return a+b;
//     }
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         int b = sc.nextInt();
//         int result = add(a,b);
//         System.out.println(result);
//     }
// }

// class main{
//     static int factorial(int n){
//         int fact = 1;
//         for(int i=1;i<=n;i++){
//             fact = fact*i;
//         }
//         return fact;
//     }
// public static void main(String[] args){
//   Scanner sc = new Scanner(System.in);
//   int n = sc.nextInt();
//   int result = factorial(n);
//   System.out.println(result);
// }
// }
 
// class Student{
//     String name;
//     int age;
//     Student(String n,int a){
//         name = n;
//         age = a;
//     }
//     void display(){
//         System.out.println("Name:"+name);
//         System.out.println("Age:"+age);
//     }
// }
// public class main{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         String name = sc.nextline();
//         int age = sc.nextInt();
//         Student s = new Student(name,age);
//         s.display();
//     }
// }
// import java.util.Scanner;
// class Rectangle{
//     int length;
//     int breadth;
//     Rectangle(int l,int b){
//         length = l;
//         breadth = b;
//     }
//     void display(){
//         System.out.println("Length:"+length);
//         System.out.println("Breadth:"+breadth);
//     }
// }
// public class main{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         int length = sc.nextInt();
//         int breadth = sc.nextInt();
//         Rectangle r = new Rectangle(length,breadth);
//         r.display();
//     }
// }
//  Student{
//     String name;
//     int rollno;
//     int marks1;
//     int marks2;
//     int marks3;
//    class Student(String n,int m1,int m2,int m3){
//         marks1= m1;
//         marks2 = m2;
//         marks3 = m3;
//         name = n;
//     }
//     void display(){
//         System.out.println("Name:"+name);
//         System.out.println("Rollno:"+rollno);
//         System.out.println("Average:"+average);
//     }
// }

// class box{
//     int length;
//     int breadth;
//     int height;
//     box(){
//         length = 1;
//         breadth = 1;
//         height = 1;
//     }
//     box(int side){
//         length = side;
//         breadth = side;
//         height = side;
//     }
//     box(int l , int b, int h){
//         length = l;
//         breadth = b;
//         height = h;

//     }
//     void volume(){
//         System.out.println(length*breadth*height);
//     }
// }
// public class main{
//     public static void main(String[] args){
//         box b1 = new box();
//         box b2 = new box(5);
//         box b3 = new box(2,3,4);
//         b1.volume();
//         b2.volume();
//         b3.volume();
//     }
// }
// class Student{
//     String name;
//     int age;
//     Student(){
//         name = "Unknown";
//         age =0;
//     }
//     Student(String n){
//         name = n;
//         age =0;
//     }
//     Student(String n , int a){
//         name = n;
//         age = a;
//     }
//     void display(){
//         System.out.println("Name:"+name);
//         System.out.println("Age:"+age);
//     }
// }
// public class main{
//     public static void main(String[] args){
//         Scanner sc = mew Scanner(System.in);;
//         String name = sc.nextLine();
//         int age = sc.nextInt();
//         Student s1 = new Student();
//         Student s2 = new Student(name);
//         Student s3 = new Student(name,age);
//         s1.display();
//         s2.display();
//         s3.display();
//     }
// }

// import java.util.Scanner;

// class Employee{
//     String name;
//     double salary;
//     String department;
//  Employee(){
//     name = "unknown";
//     salary = 0;
//     department = "Not Assigned";
//  }

//  Employee(String n){
//     name = n;
//     salary = 0;
//     department = "Not Assigned";

//  }
//  Employee(String n , double s , String d){
//     name = n;
//     salary = s;
//     department = d;
//  }
//  void display(){
//     System.out.println("Name:"+name);
//     System.out.println("Salary:"+salary);
//     System.out.println("Department:"+department);

//  }
// }   
// public class main{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String name = sc.nextLine();
//         double salary = sc.nextDouble();
//         sc.nextLine();
//         String department = sc.nextLine();
//         Employee e1 = new Employee();
//         Employee e2 = new Employee(name);
//         Employee e3 = new Employee(name,salary , department);
//         System.out.println("\nEmployee 1:");
//         e1.display();
//         System.out.println("\nEmployee 2:");
//         e2.display();
//         System.out.println("\nEmployee 3:");
//         e3.display();

//     }
// }

// class Animal{
//    void eat(){
//     System.out.println("Animal is eating");
//    }
// }
// class Dog extends Animal{
//     void bark(){
//         System.out.println("Dog is barking");
//     }
// }
// public class main{
//     public static void main(String[] args){
//         Dog d = new Dog();
//         d.eat();
//         d.bark();
//     }
// }
// class Employee{
//     String name;
//     double salary;
// }
// class Manager extends Employee{
//     String department;
//     void display(){
//         System.out.println("Nmae:"+name);
//         System.out.println("Salary:"+salary);
//         System.out.println("Department:"+department);
//     }
// }
// public class main{
//     public static void main(String[] args) {
//         Manager m = new Manager();
//         m.name = "Rahul";
//         m.salary = 50000;
//         m.department = "IT";
//         m.display();
//     }
// }
// class Employee{
//     String name;
//     double salary;
//     Employee(String name,double salary){
//         this.name = name;
//         this.salary = salary;
//     }
// }
// class Manager extends Employee{
//     String department;
//     double bonus;
//     Manager(String name , double salary , double bonus , String department){
//         super(name , salary);
//         this.department = department;
//         this.bonus = bonus;
//     }
//     void display(){
//         double totalSalary = salary + bonus;
//         System.out.println("Name:"+name);
//         System.out.println("Salary:"+salary);
//         System.out.println("Department:"+department);
//         System.out.println("Bonus:"+bonus);
//         System.out.println("Total Salary:"+totalsalary);
//     }
//     }
// public class main{
//     public statuic void main(string[] args){
//         Scanner sc = new Scanner(System.in);
//         String name = sc.nextLine();
//         double salary = sc.nextDouble();
//         sc.nextLine();
//         String department = sc.nextLine();
//         double bonus = sc.nextDouble();
//         Manger m = new Manager(name,salary,department,bonus);
//         m.display();
//     }
// }
// import java.util.Scanner;
// public class main{
//     public static void main(String[] args){
//         Scanner sc = new Scanner(System.in);
//         String str = sc.nextLine();
//         int count =0;
//         for(int i=0;i<str.length;i++){
//             char ch = str.charAt(i);
//             if(ch=='a'|| ch=='e'|| ch == 'i'|| ch == 'o'|| ch == 'u'||ch == 'A' || ch=='E' || ch == 'I'
//             || ch == 'O' || ch == 'U'){
//                 count++;
//             }

//         }
//         System.out.println(count);
//     }
// 
// import java.util.Scanner;
// public class main{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String str = sc.nextLine();
//         String result = str.toUpperCase();
//         System.out.println(result);

//     }
// }    

// import java.util.Scanner;
// public class main{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String str = sc.nextLine();
//         String rev = "";
//         for(int i= str.length()-1;i>=0;i--){
//                    rev = rev + str.charAt(i);
//         }
//         System.out.println(rev);
//     }
// // }
// public class main{
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in)
//         int n = sc.nextInt();
//         if(n>=90 && n<=100){
//             System.out.println("Grade A");
//         }
//         else if(n>=75 && n<=89){
//             System.out.println("Grade B");
//         }
//         else if(n>=60 && n<=74){
//             System.out.println("Grade C");
//         }
//         else if(n>=40 && n<=59){
//             System.out.println("Grade D");
//         }
//         else{
//             System.out.println("Fail");
//         }
//     }
// }

// Scanner sc = new Scanner(System.in);
// int balance  = sc.nextInt();
// int amount = sc.nextInt();
// if(amount % 100 !=0){
//     System.out.println("Withdrawal amount must be a multiple of 100");
// }
// else if(amount>balance){
//     System.out.println("Insufficient balance");
// }
// else{
//     balance = balance - amount;
//     System.out.println("Withdrawal successful");
//     System.out.println("Remaining balance:"+balance);
    
// }
// }
// }

// Scanner sc = new Scanner(System.in);
// double basic = sc.nextDouble();
// double hra = basic*20/100;
// double da = basic*10/100;
// double total = basic + hra + da;
// System.out.println("HRA:"+hra);
// System.out.println("DA:"+da);
// System.out.println("Total Salary:"+total);    


// Scanner sc = new Scanner(System.in);
// int days = sc.nextInt();
// int charge;
// if(days<=5){
//     charge = days*5;
// }
// else if(days<=10)
// {
//     charge = (5*5)+(days-5)*10;
// }
// else{
//     charge = (5*5)+(5*10)+(days-10)*15;
// }
// System.out.println("Total charge:"charge);
// }
// }

// import java.util.Scanner;
// public class main{
//     Static int countDigits(int n){
//      int count =0;
//     while(n>0){
//         n = n/10;
//     count++;
//     }
// }
// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     int T = sc.nextInt();
//     while(T-->0){
//         Int n = sc.nextInt();
//         System.out.println(countDigits(n))
//     }
// }

import java.util.Scanner
