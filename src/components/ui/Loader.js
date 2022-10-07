export default function Loader({ message }) {
	return (
		<div className='flex items-center text-center'>
			<div className='bg-green-200 max-w-xl px-4 py-2 text-green-800 rounded shadow w-full'>
				<span className='block text-sm'>{message}</span>
			</div>
		</div>
	);
}