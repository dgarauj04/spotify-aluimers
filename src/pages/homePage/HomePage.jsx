import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/mainContent/MainContent';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import Header from '../../components/header/Header';
import styled from 'styled-components';

const AppTema = styled.section`
  background: transparent;
`;

export default function HomePage({ searchTerm, setSearchTerm }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const query = searchTerm ? `?name_like=${searchTerm}` : '';
      try {
        const response = await axios.get(
          `http://localhost:3000/artists${query}`
        );
        setArtists(response.data);
      } catch (error) {
        console.error('Erro ao buscar artistas:', error);
      }
    };
    fetchArtists();
  }, [searchTerm]);

  return (
    <>
      <AppTema>
        <Sidebar />
        <Header setSearchTerm={setSearchTerm} />
        <MainContent artists={artists} searchTerm={searchTerm} />
        <Footer />
      </AppTema>
    </>
  );
}
