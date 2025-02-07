import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/mainContent/MainContent';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import Header from '../../components/header/Header';
import styled from 'styled-components';
import apiArtists from "../../api/artists.json"

const AppTema = styled.section`
  background: transparent;
`;

export default function HomePage({ searchTerm, setSearchTerm }) {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const fetchArtists = () => {
      const query = searchTerm ? searchTerm.toLowerCase() : '';
      try {
        // Filtrar os artistas localmente
        const filteredArtists = query ? apiArtists.artists.filter((artist) => artist.name.toLowerCase().includes(query)) : apiArtists.artists;
        setArtists(filteredArtists);
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
