import { useState } from 'react';
import { FaWallet, FaIndianRupeeSign, FaCreditCard, FaQrcode, FaArrowRight } from 'react-icons/fa6';

function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const renderCardFields = () => (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-4">
      <label className="block text-sm font-medium text-slate-700">
        Cardholder name
        <input
          value={cardName}
          onChange={(event) => setCardName(event.target.value)}
          placeholder="Name on card"
          className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
        />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Card number
        <input
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          placeholder="1234 5678 9012 3456"
          className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Expiry date
          <input
            value={expiry}
            onChange={(event) => setExpiry(event.target.value)}
            placeholder="MM/YY"
            className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          CVV
          <input
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            placeholder="123"
            className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
          />
        </label>
      </div>
      <p className="text-sm text-slate-500">We support Visa, Mastercard, Rupay and all major debit/credit cards.</p>
    </div>
  );

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amazon-orange">Secure checkout</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Payment methods</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">Choose a payment option and save your preferred method for faster checkout later.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={`flex cursor-pointer gap-4 rounded-3xl border p-5 transition ${paymentMethod === 'razorpay' ? 'border-amazon-orange bg-amazon-orange/10' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                <input
                  type="radio"
                  name="payment"
                  value="razorpay"
                  checked={paymentMethod === 'razorpay'}
                  onChange={() => setPaymentMethod('razorpay')}
                  className="mt-1 h-4 w-4 accent-amazon-orange"
                />
                <div>
                  <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                    <FaWallet /> Razorpay
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Pay instantly with Razorpay and all major UPI apps.</p>
                </div>
              </label>

              <label className={`flex cursor-pointer gap-4 rounded-3xl border p-5 transition ${paymentMethod === 'upi' ? 'border-amazon-orange bg-amazon-orange/10' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="mt-1 h-4 w-4 accent-amazon-orange"
                />
                <div>
                  <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                    <FaIndianRupeeSign /> UPI ID
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Enter your UPI ID to pay directly through your UPI app.</p>
                </div>
              </label>

              <label className={`flex cursor-pointer gap-4 rounded-3xl border p-5 transition ${paymentMethod === 'debit' ? 'border-amazon-orange bg-amazon-orange/10' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                <input
                  type="radio"
                  name="payment"
                  value="debit"
                  checked={paymentMethod === 'debit'}
                  onChange={() => setPaymentMethod('debit')}
                  className="mt-1 h-4 w-4 accent-amazon-orange"
                />
                <div>
                  <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                    <FaCreditCard /> Debit card
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Pay using your debit card with secure online authorization.</p>
                </div>
              </label>

              <label className={`flex cursor-pointer gap-4 rounded-3xl border p-5 transition ${paymentMethod === 'credit' ? 'border-amazon-orange bg-amazon-orange/10' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                  className="mt-1 h-4 w-4 accent-amazon-orange"
                />
                <div>
                  <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
                    <FaCreditCard /> Credit card
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Use your credit card securely for the best checkout experience.</p>
                </div>
              </label>
            </div>

            {paymentMethod === 'upi' && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <label className="block text-sm font-medium text-slate-700">
                  UPI ID
                  <input
                    value={upiId}
                    onChange={(event) => setUpiId(event.target.value)}
                    placeholder="example@okaxis"
                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amazon-orange focus:ring-2 focus:ring-amazon-orange/20"
                  />
                </label>
                <p className="mt-3 text-sm text-slate-500">You can update this UPI ID later before completing payment.</p>
              </div>
            )}

            {(paymentMethod === 'debit' || paymentMethod === 'credit') && renderCardFields()}

            {paymentMethod === 'razorpay' && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Razorpay payment</p>
                <p className="mt-2 text-sm text-slate-600">You will be redirected to Razorpay to complete your payment securely.</p>
              </div>
            )}

            {paymentMethod === 'qr' && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                <div className="mx-auto mb-4 inline-flex h-40 w-40 items-center justify-center rounded-3xl bg-slate-900 text-slate-200">
                  <FaQrcode className="h-20 w-20" />
                </div>
                <p className="text-sm font-semibold text-slate-900">Scan to pay</p>
                <p className="mt-2 text-sm text-slate-600">Scan this QR code in your UPI app and complete payment instantly.</p>
              </div>
            )}

            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-amazon-orange px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400">
              Save payment method <FaArrowRight className="text-base" />
            </button>
          </form>

          {saved && (
            <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
              {paymentMethod === 'upi' && `UPI ID ${upiId || 'saved'} is ready for checkout.`}
              {paymentMethod === 'razorpay' && 'Razorpay is set as your preferred payment method.'}
              {paymentMethod === 'debit' && 'Your debit card is saved for quick checkout.'}
              {paymentMethod === 'credit' && 'Your credit card is saved for quick checkout.'}
              {paymentMethod === 'qr' && 'QR scan is set as your preferred quick pay option.'}
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
          <h2 className="text-3xl font-bold">Stacks of payment methods</h2>
          <p className="mt-3 text-sm text-slate-300">Pick any method you like. All options are ready for future orders.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Debit / credit</p>
              <p className="mt-3 text-sm text-slate-200">Add card details once and use them for secure online checkout.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">UPI / QR scan</p>
              <p className="mt-3 text-sm text-slate-200">Scan in your UPI app or enter your VPA for instant payment confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
