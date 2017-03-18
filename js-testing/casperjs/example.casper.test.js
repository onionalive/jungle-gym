casper.test.begin('Basic home page assertions', function suite(test) {
    casper.start("http://www.google.com", function() {
        test.assertTitle("Google", "Title is correct");
        this.echo("Hello from CasperJS, Jungle Gym!");
    });

    casper.run(function() {
        test.done();
    });
});