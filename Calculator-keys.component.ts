import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-keys',
  templateUrl: './calculator-keys.component.html',
  styleUrls: ['./calculator-keys.component.css']
})
export class CalculatorKeysComponent{
  currentNumber = '0';
  firstOperand= 0;
  operator = "";
  waitForSecondNumber = false;
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }
  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.';
    }
  }
  getPrime(){
    const num = Number(this.currentNumber);
    let flag = 0;
    if(num < 2){
        this.currentNumber = "Neither Prime nor Composite"
    }
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        flag =1;
      }
    }
    if(flag==0){
      this.currentNumber = "Prime"
    }
    else{
      this.currentNumber = "Composite"
    }
  }
  getfacto(){
    const num= Number(this.currentNumber);
    let answer = 1;
    if (num == 0 || num == 1){
      this.currentNumber= "1";
    }
    else{
      for(var i = num; i >= 1; i--){
        answer = answer * i;
      }
      this.currentNumber = String(answer);
    }
  }
  private doCalculation(op:string , secondOp:number){
    switch (op){
      case '+':
      return this.firstOperand += secondOp;
      case '-':
      return this.firstOperand -= secondOp;
      case '*':
      return this.firstOperand *= secondOp;
      case '/':
      return this.firstOperand /= secondOp;
      case '=':
      return secondOp;
    }
    return secondOp;
  }
  public getOperation(op: string){
    console.log(op);
    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result  = this.doCalculation(this.operator , Number(this.currentNumber)) as number
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }
  public clear(){
    this.currentNumber = '0';
    this.firstOperand = 0;
    this.operator = "";
    this.waitForSecondNumber = false;
  }
}
