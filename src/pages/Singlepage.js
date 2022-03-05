import { useEffect, useContext, useState } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const SinglePage = ({ match }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const params = useParams(match);

  useEffect(() => {
    getSingleShow(params.id);

    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  const onClickHandler = () => {
    setDisplayForm(!displayForm);
    console.log(displayForm);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="singleshow">
            <img
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              alt={singleShow.name}
            />
            <div className="singleshow__info">
              <h1>{singleShow.name}</h1>
              {singleShow.genres &&
                singleShow.genres.map((genre) => (
                  <span key={genre} className="singleshow__genre">
                    {genre}
                  </span>
                ))}
              <p>
                <strong>Status:</strong>{" "}
                {singleShow.status && singleShow.status}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {singleShow.rating ? singleShow.rating.average : "No rating"}
              </p>
              <p>
                <strong>Offical Site:</strong>{" "}
                {singleShow.officalSite ? (
                  <a
                    href={singleShow.officalSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {singleShow.officalSite}
                  </a>
                ) : (
                  "No offical site"
                )}
              </p>
              <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
              <button onClick={onClickHandler}>Book your tickets</button>
            </div>
          </div>

          <div>
            <form
              method="submit"
              className={`form_hidden ${displayForm && "form_show"}`}
            >
              <h1>Book Your Show</h1>

              <fieldset>
                <legend>
                  <span className="number">1</span>Show Info
                </legend>
                <label for="name">Show Name:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={singleShow.name}
                />
                <br />
              </fieldset>

              <fieldset>
                <legend>
                  <span className="number">2</span>Your Details
                </legend>
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="user_name" />
                <label for="text">Your Number:</label>
                <input type="text" id="number" name="user_number" />
                <label for="number">Total Tickets:</label>
                <input type="number" id="tickets" name="user_ticket" />

                <button type="submit">Book your show</button>
              </fieldset>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePage;
