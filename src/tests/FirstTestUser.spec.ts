import User from '@models/User';

test('it should be ok', () => {
	const user = new User();
	user.name = 'Bruno';

	expect(user.name).toEqual('Bruno');
});
