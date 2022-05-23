import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: parts, isLoading } = useQuery('carParts', () => fetch('http://localhost:5000/carParts').then(res => res.json()));

    const imgStorageKey = 'd26486fbf899cc0039af503b11596d17';

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        console.log('api', url);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const carParts = {
                        name: data.name,
                        price: parseInt(data.price),
                        brand: data.brand,
                        menufacturer: data.menufacturer,
                        Warranty: data.warranty,
                        description: data.description,
                        MOQ: parseInt(data.moq),
                        available: parseInt(data.available),
                        img: img,
                        rating: parseInt(data.rating)
                    }
                    // send to db
                    fetch('http://localhost:5000/carParts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(carParts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log("object", carParts);
                            console.log(inserted.insertedId);
                            if (inserted.insertedId) {
                                toast.success('Product added Successfully')
                                reset();

                            } else {
                                toast.error('failed to insert the Product Info');
                            }
                        })
                }
                console.log('imgbb', result);
            });

    }

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Add New Product</h2>
            <div className='flex justify-center items-center my-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">

                        {/*  <div className='flex justify-center my-4'> */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/**** name field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered input-sm  w-full max-w-xs "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/**** price field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered input-sm  w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                                </label>
                            </div>
                            {/**** brand Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Brand Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("brand", {
                                        required: {
                                            value: true,
                                            message: 'Brand is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.brand?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brand.message}</span>}
                                </label>
                            </div>
                            {/**** menufacturer Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Menufacturer</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Menufacturer Name"
                                    className="input input-bordered input-sm  w-full max-w-xs"
                                    {...register("menufacturer", {
                                        required: {
                                            value: true,
                                            message: 'Menufacturer is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.menufacturer?.type === 'required' && <span className="label-text-alt text-red-500">{errors.menufacturer.message}</span>}
                                </label>
                            </div>
                            {/**** warranty Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Warranty</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="warranty Name"
                                    className="input input-bordered input-sm  w-full max-w-xs"
                                    {...register("Warranty", {
                                        required: {
                                            value: true,
                                            message: 'Warranty is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.warranty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.warranty.message}</span>}
                                </label>
                            </div>
                            {/**** description Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Description Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            {/**** moq Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("moq", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Order Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.moq?.type === 'required' && <span className="label-text-alt text-red-500">{errors.moq.message}</span>}
                                </label>
                            </div>
                            {/* Available field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Available  Quantity"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("available", {
                                        required: {
                                            value: true,
                                            message: 'Available Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                                </label>
                            </div>
                            {/**** Image upload Field  ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>
                            {/* rating field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Rating  "
                                    className="input input-sm input-bordered w-full max-w-xs"
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                </label>
                            </div>
                            {/*****  Add Button *****/}

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};


export default AddProduct;