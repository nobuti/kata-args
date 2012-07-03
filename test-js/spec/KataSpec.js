describe("Kata initialize", function () {

    beforeEach(function(){
        this.kata = new Kata("console input");
    });

    it("Should expose console", function() {
        expect(this.kata.input).toBe('console input');
    });

});

describe("Kata parsing flags and values", function () {

    it("Should parse loggin flag: -l", function() {
        this.kata = new Kata("-l").parse();
        console.log(this.kata.render());
        
        expect(this.kata.flags.length).toBe(1);
        expect(this.kata.flags[0]).toBe('-l');
        expect(this.kata.values[0]).toBeUndefined();
        expect(this.kata.render()).toBe('loggin=true\n');
    });

    it("Should parse port flag: -p 8080", function() {
        this.kata = new Kata("-p 8080").parse();
        console.log(this.kata.render());
        
        expect(this.kata.flags.length).toBe(1);
        expect(this.kata.flags[0]).toBe('-p');
        expect(this.kata.values[0]).toBe('8080');

        expect(this.kata.render()).toBe('port=8080\n');
    });

    it("Should parse flags implicit values: -l -p", function() {
        this.kata = new Kata("-l -p").parse();
        console.log(this.kata.render());
        
        expect(this.kata.render()).toBe('loggin=true\nport=8888\n');
    });

    it("Should parse port flag explicit values: -l false -p 80", function() {
        this.kata = new Kata("-l false -p 80").parse();
        console.log(this.kata.render());

        expect(this.kata.render()).toBe('loggin=false\nport=80\n');
    });

    it("Should parse several flags: -l -p 8080 -d /usr/logs", function() {
        this.kata = new Kata("-l -p 8080 -d /usr/logs").parse();
        console.log(this.kata.render());
        expect(this.kata.render()).toBe('loggin=true\nport=8080\ndirectorio=/usr/logs\n');
    });

    it("Should parse several flags with negatives values", function() {
        this.kata = new Kata("-l -p 8080 -d /usr/logs -g this,is,a,list -d 1,2,-3,5").parse();
        console.log(this.kata.render());
        expect(this.kata.render()).toBe('loggin=true\nport=8080\ndirectorio=/usr/logs\nstring=this,is,a,list\ndigitos=1,2,-3,5\n');
    });

    it("Should parse unknown flags", function() {
        this.kata = new Kata("-l -h localhost -d 1,2,-3,5").parse();
        console.log(this.kata.render());
        expect(this.kata.render()).toBe('loggin=true\nh=localhost\ndigitos=1,2,-3,5\n');
    });

});
