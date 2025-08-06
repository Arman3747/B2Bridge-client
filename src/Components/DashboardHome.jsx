import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { FaShoppingCart, FaBoxes, FaUpload } from 'react-icons/fa'

const DashboardHome = () => {

    const { user } = use(AuthContext);
    const userEmail = user.email;

    const [summary, setSummary] = useState({
        totalQuantityPurchased: 0,
        uniqueProductsPurchased: 0,
        totalProductsPosted: 0,
    });

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await axios.get(`https://btobridge-server.vercel.app/userDashboard/${userEmail}`);
                setSummary(response.data);
            } catch (err) {
                console.error('Error fetching summary:', err);
            }
        };

        fetchSummary();
    }, [userEmail]);

    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
            <div className="card w-72 bg-base-100 shadow-xl border">
                <div className="card-body items-center text-center">
                    <FaShoppingCart className="text-4xl text-primary mb-2" />
                    <h2 className="card-title">Total Purchased</h2>
                    <p className="text-2xl font-bold">{summary.totalQuantityPurchased}</p>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl border">
                <div className="card-body items-center text-center">
                    <FaBoxes className="text-4xl text-secondary mb-2" />
                    <h2 className="card-title">Unique Products Bought</h2>
                    <p className="text-2xl font-bold">{summary.uniqueProductsPurchased}</p>
                </div>
            </div>

            <div className="card w-72 bg-base-100 shadow-xl border">
                <div className="card-body items-center text-center">
                    <FaUpload className="text-4xl text-accent mb-2" />
                    <h2 className="card-title">Products You Posted</h2>
                    <p className="text-2xl font-bold">{summary.totalProductsPosted}</p>
                </div>
            </div>
        </div>
    );
};


export default DashboardHome;
