import React, { useState } from 'react';
import { TextInput, Button, Loader } from '@mantine/core';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (!query) return;
        setLoading(true);
        onSearch(query);
        setLoading(false);
        setQuery('');
    };

    return (
        <div className="flex items-center justify-end  p-4 bg-white rounded-lg shadow-lg glassmorphism">
            <TextInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter city name..."
                size="md"
                radius="md"
                classNames ={{input:'rounded-lg h-9'}}
                className="flex-1  border-transparent focus:ring-2 text-black focus:ring-blue-400"
            />
            <Button
                onClick={handleSearch}
                disabled={loading}
                size="md"
                radius="md"
                className="bg-gradient-to-r w-[100px] h-10  rounded-xl from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white"
            >
                {loading ? <Loader size="xs" color="white" /> : 'Search'}
            </Button>
        </div>
    );
};

export default SearchBar;
