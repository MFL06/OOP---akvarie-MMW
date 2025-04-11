function borderControl(){
    class A{ // A er en parent/super-klasse til B, fordi B exstender til A
        constructor(){

        }

        stop(){

        }

    }
    class B extends A{ //extends gør, at klassen B også kan gøre brug af klasse A's metoder og attributter
        constructor(){

        }
        stop(){

        }

        summin(){
            this.stop() // dette bruger metoden fra klasse B
            super.stop() // dette bruger metoden fra klasse A
        }

    }


}