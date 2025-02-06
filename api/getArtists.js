// api/getArtists.js

export default function handler(req, res) {
  try {
    const artistsData = require('./artists.json');

    if (req.method === 'GET') {
      const { name_like } = req.query;

      // Filtrar artistas com base no parâmetro de busca, se fornecido
      const filteredArtists = name_like
        ? artistsData.artists.filter((artist) =>
            artist.name.toLowerCase().includes(name_like.toLowerCase())
          )
        : artistsData.artists;

      res.status(200).json(filteredArtists);
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro no handler:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
}
