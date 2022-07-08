import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';

import ImagePopup from '../ImagePopup/ImagePopup';

import ConfirmActionPopup from '../СonfirmActionPopup/ConfirmActionPopup';

export default function Home({
  currentUser,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  isConfirmActionPopupOpen,
  cards,
  selectedCard,
  deletedCard,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleCardClick,
  handleCardLike,
  handleCardDelete,
  deleteCard,
  closeAllPopups,
  handleUpdateUser,
  handleUpdateAvatar,
  handleAddPlaceSubmit,
}) {
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      </CurrentUserContext.Provider>

      <Footer />

      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          isPopup={true}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        isPopup={true}
        onAddPlace={handleAddPlaceSubmit}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        isPopup={true}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <ConfirmActionPopup
        isOpen={isConfirmActionPopupOpen}
        onClose={closeAllPopups}
        isPopup={true}
        card={deletedCard}
        onConfirmAction={deleteCard}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}
