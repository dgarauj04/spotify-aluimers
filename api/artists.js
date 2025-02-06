// api/artists.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Caminho para o arquivo artists.json
  const filePath = path.join(process.cwd(), 'api', 'artists.json');
  // Ler o conteúdo do arquivo
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const artistsData = JSON.parse(jsonData);

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
}
