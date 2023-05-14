import {Input} from "reactstrap";
import {useState} from "react";

export const CreditCard = () => {

	const [cardOwner, setCardOwner] = useState('');
	const [numberOnCard, setNumberOnCard] = useState<number>(0);
	const [expDate, setExpDate] = useState<number>();
	const [cvv, setCvv] = useState<number>();

	const allCheck = false;
	const alertHelp = () =>{
		alert(" How can i help you !!!!");
	};

	//Input actions
	const handleCardOwner = (e:any) =>{
		setCardOwner(e.target.value)
	}

	const handleCardNumber = (e:any) =>{
		setNumberOnCard(e.target.value)
		console.log(numberOnCard)
	}
	const handleExpire = (e:any) =>{
		setExpDate(e.target.value)
		console.log(expDate)
	}

	const handleCvv = (e:any) =>{
		setCvv(e.target.value)
		console.log(cvv)
	}



	const handleSubmit = (e:any ) => {
		e.peventDefault();
	};

	return (
		<section className="">
			<div className="flex justify-between ">
				<h1 className="font-bold text-gray-800 ">Credit Card information</h1>
				<span className="rounded-full border-none bg-gray-300/80 h-5 w-5 text-sm text-white text-center hover:bg-gray-300 cursor-pointer "
					  onClick={alertHelp}
				>?</span>
			</div>

			<form className="flex  flex-col space-y-5 mt-5"

			onSubmit={handleSubmit}>
			<Input
				id="cardOwner"
				name="cardOwner"
				placeholder="Name of the Card Owner"
				type="text"
				value={cardOwner}
				onChange={handleCardOwner}
				required
			/>
				<Input
				id="numberOnCard"
				name="numberOnCard"
				placeholder="Number on the Card"
				type="number"
				value={numberOnCard}
				onChange={handleCardNumber}
				required
			/>
				<Input
				id="expDate"
				name="expDate"
				placeholder="Expiration Date "
				type="number"
				value={expDate}
				onChange={handleExpire}
				required
			/>
				<Input
				id="cvv"
				name="cvv"
				placeholder="Security Code/CVV"
				type="number"
				value={cvv}
				maxLength={3}
				onChange={handleCvv}
				required
			/>

				<button
					type="submit"
					className={`${!allCheck ? " bg-gray-200" : "bg-[#5282FB] hover:bg-[#0e46d3] "} disabled:cursor-not-allowed  mt-4 text-white font-light text-lg  w-full relative py-2 rounded-sm `}
					disabled={!allCheck}
				>Submit
				</button>
			</form>


		</section>
	);
};