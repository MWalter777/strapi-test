import { ProductType } from '@/types/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
const products: ProductType[] = [
	{
		id: 1,
		title: 'Product 1',
		name: 'Awesome Product 1',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 49.99,
		image:
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/293eee17-54c3-4756-a04e-8cfe4f638a0f/d76cyaw-7a7827ac-617b-4e40-92b0-d808c626eb30.jpg/v1/fit/w_600,h_773,q_70,strp/amazing___spiderman_by_monicaravenwolf_d76cyaw-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5M2VlZTE3LTU0YzMtNDc1Ni1hMDRlLThjZmU0ZjYzOGEwZlwvZDc2Y3lhdy03YTc4MjdhYy02MTdiLTRlNDAtOTJiMC1kODA4YzYyNmViMzAuanBnIiwiaGVpZ2h0IjoiPD03NzMiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzI5M2VlZTE3LTU0YzMtNDc1Ni1hMDRlLThjZmU0ZjYzOGEwZlwvbW9uaWNhcmF2ZW53b2xmLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.zmaXiynqaFjDigOAEmAyodgYY8spRH_I5nHad0DKX1A',
		stock: 10,
	},
	{
		id: 2,
		title: 'Product 2',
		name: 'Awesome Product 2',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 59.99,
		image:
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/293eee17-54c3-4756-a04e-8cfe4f638a0f/dcw2vh8-8e8c26a5-f006-4cce-af72-54447900e10d.jpg/v1/fit/w_599,h_759,q_70,strp/flash_by_monicaravenwolf_dcw2vh8-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU5IiwicGF0aCI6IlwvZlwvMjkzZWVlMTctNTRjMy00NzU2LWEwNGUtOGNmZTRmNjM4YTBmXC9kY3cydmg4LThlOGMyNmE1LWYwMDYtNGNjZS1hZjcyLTU0NDQ3OTAwZTEwZC5qcGciLCJ3aWR0aCI6Ijw9NTk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ozY2LGthL5-Q433AgfO0XSF-wymNYmOfWbPErogHIYM',
		stock: 15,
	},
	{
		id: 3,
		title: 'Product 3',
		name: 'Awesome Product 3',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 69.99,
		image:
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/293eee17-54c3-4756-a04e-8cfe4f638a0f/d7ao5tk-a0d4ba38-781b-4eb6-9e2f-c0f233703d7e.jpg/v1/fit/w_600,h_773,q_70,strp/shhh__my_common_sense_is_tingling___deadpool_by_monicaravenwolf_d7ao5tk-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5M2VlZTE3LTU0YzMtNDc1Ni1hMDRlLThjZmU0ZjYzOGEwZlwvZDdhbzV0ay1hMGQ0YmEzOC03ODFiLTRlYjYtOWUyZi1jMGYyMzM3MDNkN2UuanBnIiwiaGVpZ2h0IjoiPD03NzMiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzI5M2VlZTE3LTU0YzMtNDc1Ni1hMDRlLThjZmU0ZjYzOGEwZlwvbW9uaWNhcmF2ZW53b2xmLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.qcDgCba079dMabEfzuvXbmyh5dCrsMC140T_lK_elA4',
		stock: 20,
	},
	{
		id: 4,
		title: 'Product 4',
		name: 'Awesome Product 4',
		description:
			'This is an amazing product that you will love! It has many features and benefits that will make your life easier and more enjoyable.',
		price: 79.99,
		image:
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe62f164-776b-4568-810b-8140acabd2fb/dhz7a1d-f965ec5f-bcbe-4e16-a100-3f4b7bb1dcc1.jpg/v1/fill/w_1000,h_800,q_70,strp/jinhsi_by_crystalmoon01_dhz7a1d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcL2ZlNjJmMTY0LTc3NmItNDU2OC04MTBiLTgxNDBhY2FiZDJmYlwvZGh6N2ExZC1mOTY1ZWM1Zi1iY2JlLTRlMTYtYTEwMC0zZjRiN2JiMWRjYzEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.I-veXYXqMckvb_glTDKmwM0AjnlZ4RlVKjmFUCSXchE',
		stock: 25,
	},
];

export const fetchAllProducts = createAsyncThunk<ProductType[]>(
	'products/fetchAll',
	async () => {
		// Simulate an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 5000));
		return products;
	}
);
