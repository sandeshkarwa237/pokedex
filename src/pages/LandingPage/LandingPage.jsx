import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { ItemOverview } from "../../components/common/ItemOverview/ItemOverview";
import { SearchField } from "../../components/common/SearchField/SearchField";
import { fetchItemDetails } from "../../services/fetchItemDetails";

export const LandingPage = () => {
  const navigate = useNavigate({});
  const [itemList, updateItemList] = useState([]);
  const [searchField, updateSearchField] = useState("");

  const fetchStores = useCallback(async () => {
    await fetchItemDetails()
      .then(({ data }) => {
        let results = data.results;
        let promisesArray = results.map((result) => {
          return fetch(result.url).then((response) => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then((data) => {
        updateItemList(data);
      });
  }, []);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  const addToFavorite = (selectedId) => {
    let updatedItemList = itemList.map((list) => {
      return list.id === selectedId
        ? { ...list, isSelected: !list.isSelected }
        : list;
    });
    updateItemList(updatedItemList);
  };

  const filteredItemList = useMemo(() => {
    const searchedText = searchField.toLowerCase();
    return !searchedText
      ? itemList
      : itemList.filter(({ name }) => {
          return name.search(searchedText) > -1;
        });
  }, [searchField, itemList]);

  return (
    <div className="row">
      <SearchField
        value={searchField}
        onChange={(value) => {
          updateSearchField(value);
        }}
      />
      {filteredItemList.map((itemDetails) => {
        const {
          types,
          id,
          isSelected,
          name,
          sprites: {
            other: {
              dream_world: { front_default: thumbnailImage },
            },
          },
        } = itemDetails;
        return (
          <ItemOverview
            imageSrc={thumbnailImage}
            title={name}
            types={types}
            isSelected={isSelected}
            addToFavorite={addToFavorite}
            showDetailsSection={() =>
              navigate(`/details`, { state: { itemDetails } })
            }
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
};
