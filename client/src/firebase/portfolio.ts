import type { Portfolio } from '@/types/types';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './config';

export const fetchPortfolioData = async (userId: string) => {
  try {
    // Query Firestore to get portfolio data for the current user
    const portfoliosQuery = query(
      collection(db, 'portfolios'),
      where('userId', '==', userId)
    );

    const querySnapshot = await getDocs(portfoliosQuery);

    const portfolios: Portfolio[] = [];
    querySnapshot.forEach((doc) => {
      portfolios.push(doc.data() as Portfolio);
    });

    return portfolios;
  } catch (error) {
    console.error("Error fetching portfolio data: ", error);
    throw new Error("Could not fetch portfolio data");
  }
};
