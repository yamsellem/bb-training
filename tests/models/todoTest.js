define(['models/todo'], function(Todo) {

    describe('Todo model', function(){

		var todo;
		before(function() {
			todo = new Todo();
		})

		it('should have defaults values', function(){
			expect(todo.get('title')).to.equal('');
			expect(todo.get('completed')).to.be.false;
		});
	})
})