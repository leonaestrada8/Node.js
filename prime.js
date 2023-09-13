function prime(n){
        var prime = true;
        
        for (var i = 2; i < 10; i++) {
            console.log(i);
            if ((n % i == 0) && (n != i)) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log("------------------- %d is PRIME\n", n);
        } else {
            console.log("====== %d is NOT prime\n", n);
        }
}

prime(7);
prime(42);

