Object.keys(pfpCache).forEach(n => delete pfpCache[n])
function generateSVG(text, color = "#000000") {

    // Set the fixed height and width
    const height = '100%'; // 10px height
    const width = '100%';  // Fixed width of 50px

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height); // Adding a little padding for the text
    svg.setAttribute("viewBox", `0 0 ${width} ${height + 5}`);
    svg.setAttribute("style", 'transform: scaleX(80%);')
    // Create text element
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", '50%'); // Position at the start (x=0)
    textElement.setAttribute("y", '50%'); // Position at the height
    textElement.setAttribute("font-size", '10px'); // Set font size to 10px
    textElement.setAttribute("fill", color)
    textElement.setAttribute("text-anchor", 'middle'); // Set font size to 10px
    textElement.setAttribute("dominant-baseline", 'middle'); // Set font size to 10px
    textElement.setAttribute("font-family", "Arial, sans-serif");
    textElement.textContent = text;

    // Append the text to the SVG
    svg.appendChild(textElement);

    return svg;
}


loadPfp = function (username, userData, button) {
    return new Promise(async (resolve, reject) => {
        if (pfpCache[username]) {
            resolve(pfpCache[username].cloneNode(true));
        } else {
            let pfpElement;

            if (!userData) {
                try {
                    const resp = await fetch(`https://api.meower.org/users/${username}`);
                    userData = await resp.json();
                } catch (error) {
                    console.error("Failed to fetch:", error);
                    resolve(null);
                }
            }

            if (userData.avatar) {
                const pfpurl = `https://uploads.meower.org/icons/${userData.avatar}`;


                pfpElement = document.createElement("div");
                pfpElement.classList.add("pfp-inner");
                pfpElement.setAttribute("alt", username);
                pfpElement.setAttribute("data-username", username);
                pfpElement.classList.add("avatar");
                if (!button) {
                    pfpElement.setAttribute("onclick", `openUsrModal('${username}')`);
                }

                if (userData.avatar_color) {
                    //                            if (userData.avatar_color === "!color") {
                    //                                pfpElement.style.border = `3px solid #f00`;
                    //                                pfpElement.style.backgroundColor = `#f00`;
                    //                            } else {
                    //                            }
                    pfpElement.style.border = `3px solid #${userData.avatar_color}`;
                    pfpElement.style.backgroundColor = `#${userData.avatar_color}`;
                    console.log(userData.avatar_color, username)
                    pfpElement.innerHTML = generateSVG(username, "000000" == userData.avatar_color ? "#ffffff" : "#000000").outerHTML
                }

            } else if (userData.pfp_data) {
                let pfpurl;
                if (userData.pfp_data > 0 && userData.pfp_data <= 37) {
                    pfpurl = `images/avatars/icon_${userData.pfp_data - 1}.svg`;
                } else {
                    pfpurl = `images/avatars/icon_err.svg`;
                }

                pfpElement = document.createElement("div");
                pfpElement.style.backgroundImage = `url(${pfpurl})`;
                pfpElement.classList.add("pfp-inner");
                pfpElement.setAttribute("alt", username);
                pfpElement.setAttribute("data-username", username);
                pfpElement.classList.add("avatar");
                if (!button) {
                    pfpElement.setAttribute("onclick", `openUsrModal('${username}')`);
                }
                pfpElement.classList.add("svg-avatar");

                if (userData.avatar_color) {
                    pfpElement.style.border = `3px solid #${userData.avatar_color}`;
                }

            } else {
                const pfpurl = `images/avatars/icon_-4.svg`;

                pfpElement = document.createElement("div");
                pfpElement.style.backgroundImage = `url(${pfpurl})`;
                pfpElement.classList.add("pfp-inner");
                pfpElement.setAttribute("alt", username);
                pfpElement.setAttribute("data-username", username);
                if (!button) {
                    pfpElement.setAttribute("onclick", `openUsrModal('${username}')`);
                }
                pfpElement.classList.add("avatar");
                pfpElement.classList.add("svg-avatar");

                pfpElement.style.border = `3px solid #fff`;
                pfpElement.style.backgroundColor = `#fff`;
            }

            if (pfpElement) {
                pfpCache[username] = pfpElement.cloneNode(true);
            }

            resolve(pfpElement);
        }
    });
}