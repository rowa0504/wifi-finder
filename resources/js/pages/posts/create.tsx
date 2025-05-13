import AppLayout from '@/layouts/app-layout';
import { faCirclePlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, router } from '@inertiajs/react';
import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 14.5995, // セブの緯度
    lng: 120.9842, // セブの経度
};

const categories = [
    { id: 1, name: 'Cafe' },
    { id: 2, name: 'Library' },
    { id: 3, name: 'Restaurant' },
    { id: 4, name: 'Park' },
    { id: 5, name: 'Hotel' },
    { id: 6, name: 'Airport' },
    { id: 7, name: 'Shopping Mall' },
    { id: 8, name: 'Co-working Space' },
    { id: 9, name: 'Public Transport' },
    { id: 10, name: 'Other' }, // その他のカテゴリ
];

const Index: React.FC = () => {
    const [showForm, setShowForm] = useState(true);
    const [form, setForm] = useState({
        place: '',
        wifi_name: '',
        category_id: '',
        location: '',
        speed: '',
        description: '',
    });

    const [selectedLocation, setSelectedLocation] = useState(center);

    // ✅ useRefでAutocompleteのインスタンスを保持
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    // ✅ onLoadでAutocompleteインスタンスをrefに代入
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete;
    };

    // ✅ ユーザーが場所を選択したときの処理
    const handlePlaceChanged = () => {
        if (autocompleteRef.current !== null) {
            const place = autocompleteRef.current.getPlace();
            if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();

                setSelectedLocation({ lat, lng });
                setForm({
                    ...form,
                    place: place.name || '',
                    location: JSON.stringify({ latitude: lat, longitude: lng }),
                });
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/posts', form);
        setShowForm(false);
    };

    return (
        <AppLayout>
            <Head title="WiFi Posts" />

            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Share your Wifi Spot!</h1>
                <div className="mb-6">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back
                    </button>
                </div>
                {showForm && (
                    <div className="mb-6 max-w-xl rounded border bg-white p-4 shadow">
                        <form onSubmit={handleSubmit}>
                            <LoadScript googleMapsApiKey="AIzaSyDgBdVFfiwSj1rQsg01-vtn0z2qoMG6ZaI" libraries={['places']}>
                                {/* ✅ Autocomplete を正しく設定 */}
                                <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
                                    <input
                                        name="place"
                                        onChange={handleChange}
                                        value={form.place}
                                        className="mb-2 w-full border p-2"
                                        placeholder="Place"
                                    />
                                </Autocomplete>

                                <GoogleMap mapContainerStyle={containerStyle} center={selectedLocation} zoom={12}>
                                    <Marker position={selectedLocation} />
                                </GoogleMap>
                            </LoadScript>

                            <input
                                name="wifi_name"
                                onChange={handleChange}
                                value={form.wifi_name}
                                className="mb-2 w-full border p-2"
                                placeholder="Wi-Fi Name"
                            />
                            <select name="category_id" onChange={handleChange} value={form.category_id} className="mb-2 w-full border p-2">
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <input
                                name="speed"
                                type="number"
                                onChange={handleChange}
                                value={form.speed}
                                className="mb-2 w-full border p-2"
                                placeholder="Speed (Mbps)"
                            />

                            <textarea
                                name="description"
                                onChange={handleChange}
                                value={form.description}
                                className="mb-2 w-full border p-2"
                                placeholder="Description"
                            />

                            <div className="flex justify-end">
                                <button type="button" onClick={() => setShowForm(false)} className="mr-2 rounded border px-4 py-2">
                                    Cancel
                                </button>
                                <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">
                                    <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default Index;
