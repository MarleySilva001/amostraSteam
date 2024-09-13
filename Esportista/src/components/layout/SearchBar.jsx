import { useState, useEffect } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import axios from "axios";
import styles from "./styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");        // Armazena o valor digitado
  const [pesquisa, setPesquisa] = useState([]);     
  const [filteredClubes, setFilteredClubes] = useState([]); 
  const [carregando, setCarregando] = useState(true);       // Estado de carregamento
  const [erro, setErro] = useState(null);        
  const [showDropdown, setShowDropdown] = useState(false);  
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../../db.json');
        setPesquisa(response.data.clubes);  
        setCarregando(false); 
      } catch (error) {
        setErro("Erro ao buscar os dados");
        setCarregando(false);
      }
    };
    fetchData();
  }, []);

  // Atualiza o valor do input e filtra os clubes
  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    if (searchValue.length > 0) {
      const filtered = pesquisa.filter((clube) =>
        clube.nome.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredClubes(filtered);
      setShowDropdown(true); 
    } else {
      setShowDropdown(false);  
    }
  };

  const handleSelect = (value) => {
    setQuery(value); 
    setShowDropdown(false);
    navigate(`/esportes/futebol/clube/${value}`)
  };

  const handleClear = () => {
    setQuery("");
    setFilteredClubes([]); // Limpa os clubes filtrados
    setShowDropdown(false); // Oculta o dropdown
  };

  // Exibe o estado de carregamento ou erro
  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div className={styles.searchWrapper}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className={styles.label}>
        <input
          required
          autoComplete="off"
          placeholder="Pesquisar clubes"
          id="search"
          type="text"
          value={query} // Valor do input controlado pelo estado
          onChange={handleInputChange} // Atualiza o estado quando o input muda
          className={styles.input}
        />
        <div className={styles.icon}>
          <IoMdSearch />
        </div>
        <button type="reset" className={styles.closebtn} onClick={handleClear}>
          <IoMdClose />
        </button>
        </label>
      </form>

      {/* Dropdown para exibir os clubes filtrados */}
      {showDropdown && filteredClubes.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredClubes.map((clube, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleSelect(clube.nome)}
            >
                <img src={clube.clubeImg} alt="" />
              {clube.nome}  {/* Exibe o nome do clube */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
