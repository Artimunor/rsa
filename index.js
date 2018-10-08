
function exteuclid(form) {
 
    out = new String(79);
    line = new Array();
    x = new Array();
    q = new Array();
    var r=1, i=0;
    a = a_out = form.mod.value;
    b = b_out = form.b.value;
    x[0]=0; x[1]=1;

    if (b != 0) {
        while (r != 0) {
            q[i]  = Math.floor(a/b); 
            r = a % b;
            out  = a  +  " = " + q[i] + " * " + b +  " + " + r;
            while(out.length < 39)   { 
                out += " ";
            }
            if (i>1) {
                x[i] = (x[i-2] - x[i-1]*q[i-2] + a_out*a_out) % a_out ;
                out  += "x[" + i + "]=" + x[i-2] +  " - " + x[i-1] + " * " + q[i-2] + " mod " + a_out + " = " + x[i] + "\n";
            } else { 
                out  += "x[" + i + "]=" + x[i] + "\n";
            }
            line[i] = out;
            i++;  
            a = b;
            b = r;
        } 
    }

    x[i] = (x[i-2] - x[i-1]*q[i-2] + a_out*a_out) % a_out ;
    out = "xxxxxxxxxxxxxxxxxxxxxxxxxxx            " + "x[" + i + "]=" + x[i-2] +  " - " + x[i-1] + " * " + q[i-2] + " mod " + a_out + " = " + x[i] + "\n";
    line[i] = out;
    form.calculations.value = line.join("");

    if(a==1) {
        form.inverse.value = "Inverse of " + b_out + " mod " + a_out + " is " + x[i] + ". Check: " + b_out + "*" + x[i] + " mod " + a_out + " = " + (b_out * x[i]) % a_out ;
    } else {
        form.inverse.value = "No inverse since gcd( " + b_out + "," + a_out + ") not 1."; 
    } 
}