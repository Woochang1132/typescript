// import { print as printMessage, add } from "./10-3-module1.js";
import * as calculator from "./10-3-module1.js";
calculator.add();
calculator.print(); // 다음과 같이 설정된 이름으로 사용할 수 있다.
console.log(calculator.number);
