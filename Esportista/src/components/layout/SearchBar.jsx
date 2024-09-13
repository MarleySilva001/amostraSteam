import { useState, useEffect } from "react";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import axios from "axios";
import styles from "./styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [pesquisa, setPesquisa] = useState([]);     
  const [filteredClubes, setFilteredClubes] = useState([]); 
  const [carregando, setCarregando] = useState(true);
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
    setFilteredClubes([]); 
    setShowDropdown(false); 
  };

  
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
          value={query} 
          onChange={handleInputChange}
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

      {showDropdown && filteredClubes.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredClubes.map((clube, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleSelect(clube.nome)}
            >
                <img src={clube.clubeImg} alt="" />
              {clube.nome}  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
