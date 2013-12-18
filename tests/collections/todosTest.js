define(['collections/todos'], function(Todos) {

    describe('Todos', function(){
        it('defaults are ok', function(){
            expect(Todos.size()).is.equal(0);
        })
    })
})