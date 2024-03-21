import React, { useContext } from 'react'
import productContext from '../Context/ProductsContext'

export default function Toast() {

    const contextData = useContext(productContext)

  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      {contextData.isShowToast && (
        <div className="toast align-items-center show text-white bg-primary">
          {" "}
          {/* add show class to show toast */}
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn-close btn-close-wsite ms-3"
            ></button>
            <div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
          </div>
        </div>
      )}
    </div>
  );
}
