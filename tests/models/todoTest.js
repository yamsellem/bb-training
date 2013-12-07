define(['js/models/todo'], function(Todo) {
	describe('Todo', function(){	

		var todo;
		before(function() {
			todo = new Todo();
		})

		it('defaults are ok', function(){
			expect(todo.get('title')).to.equal('');
			expect(todo.get('completed')).to.be.false;
		})
	})
})