function createButtonContainer(p) {
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    if (settingsstuff().showpostbuttons) {
        buttonContainer.classList.add("visibleButtonContainer");
    }
    buttonContainer.innerHTML = `
    <div class='toolbarContainer'>
        <div class='toolButton tooltip' onclick='sharepost()' aria-label="share" data-tooltip="${lang().action.share}" title="share" tabindex="0">
            <svg viewBox='0 0 20 20' fill='currentColor' width='19' height='19'><path d='M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z'></path><path d='M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z'></path></svg>
        </div>
        <div class='toolButton tooltip' onclick='loadReactionPickerPc("${p._id}")' aria-label="react" data-tooltip="React" title="react" tabindex="0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9.77778C4 9.77778 5.33333 10.2222 8 10.2222C10.6667 10.2222 12 9.77778 12 9.77778C12 9.77778 11.1111 11.5556 8 11.5556C4.88889 11.5556 4 9.77778 4 9.77778Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4184 12.4183 16 8 16C3.58171 16 0 12.4184 0 8C0 3.5816 3.58171 0 8 0C12.4183 0 16 3.5816 16 8ZM8 9.33377C6.38976 9.33377 5.32134 9.14627 4 8.88932C3.69824 8.83116 3.11111 8.88932 3.11111 9.77821C3.11111 11.556 5.15332 13.7782 8 13.7782C10.8462 13.7782 12.8889 11.556 12.8889 9.77821C12.8889 8.88932 12.3018 8.83073 12 8.88932C10.6787 9.14627 9.61024 9.33377 8 9.33377ZM5.33333 7.55556C5.94699 7.55556 6.44444 6.85894 6.44444 6C6.44444 5.14106 5.94699 4.44444 5.33333 4.44444C4.71967 4.44444 4.22222 5.14106 4.22222 6C4.22222 6.85894 4.71967 7.55556 5.33333 7.55556ZM11.7778 6C11.7778 6.85894 11.2803 7.55556 10.6667 7.55556C10.053 7.55556 9.55556 6.85894 9.55556 6C9.55556 5.14106 10.053 4.44444 10.6667 4.44444C11.2803 4.44444 11.7778 5.14106 11.7778 6Z" fill="currentColor"></path>
            </svg>
        </div>
        ${p.post_origin !== 'inbox' ? `<div class='toolButton tooltip' onclick='reportModal("${p._id}")' aria-label="report" data-tooltip="${lang().action.report}" title="report" tabindex="0">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 6.00201H14V3.00201C14 2.45001 13.553 2.00201 13 2.00201H4C3.447 2.00201 3 2.45001 3 3.00201V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.00201C21 6.45001 20.553 6.00201 20 6.00201Z"></path></svg>
        </div>
        <div class='toolButton tooltip' onclick='pingusr(event)' aria-label="ping" data-tooltip="${lang().action.ping}" title="ping" tabindex="0">
            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>
        </div>
        <div class='toolButton tooltip left' onclick='reply("${p._id}")' aria-label="reply" data-tooltip="${lang().action.reply}" title="reply" tabindex="0">
            <svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z' fill='currentColor'></path></svg>
        </div>` : ''}
    </div>
    `;
    let nwbtn
    if (p.u === localStorage.getItem("username") && p.post_origin !== "inbox") {
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `editPost('${p.post_origin}', '${p._id}')`);
        nwbtn.setAttribute("title", `edit`);
        nwbtn.setAttribute("aria-label", `edit post`);
        nwbtn.setAttribute("tabindex", "0");
        nwbtn.classList.add("tooltip");
        nwbtn.setAttribute("data-tooltip", `${lang().action.edit}`);
        nwbtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `deletePost("${p._id}")`);
        nwbtn.setAttribute("title", `delete`);
        nwbtn.setAttribute("aria-label", `delete post`);
        nwbtn.setAttribute("tabindex", "0");
        nwbtn.classList.add("tooltip");
        nwbtn.setAttribute("data-tooltip", `${lang().action.delete}`);
        nwbtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
    } else if (localStorage.getItem("permissions") === "1") {
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `modDeletePost("${p._id}")`);
        nwbtn.setAttribute("title", `mod delete`);
        nwbtn.setAttribute("aria-label", `mod delete`);
        nwbtn.setAttribute("tabindex", "0");
        nwbtn.classList.add("tooltip");
        nwbtn.setAttribute("data-tooltip", `${lang().action.moddel}`);
        nwbtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
    }
    
    if (localStorage.getItem("permissions") === "1") {
        nwbtn = document.createElement("div");
        nwbtn.classList.add("toolButton");
        nwbtn.setAttribute("onclick", `modPostModal("${p._id}")`);
        nwbtn.setAttribute("title", `moderate`);
        nwbtn.setAttribute("aria-label", `moderate post`);
        nwbtn.setAttribute("tabindex", "0");
        nwbtn.classList.add("tooltip");
        nwbtn.setAttribute("data-tooltip", `${lang().action.modpost}`);
        nwbtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"></path></svg>
        `;
        buttonContainer.querySelector('.toolbarContainer').prepend(nwbtn);
    }

    return buttonContainer;
}

function loadpost(p) {
    let user;
    let content;
    let bridged = (p.u && bridges.includes(p.u));
    
    if (bridged) {
        const rcon = p.p;
        const match = rcon.match(/^([a-zA-Z0-9_-]{1,20})?:([\s\S]+)?/m);
        
        if (match) {
            user = match[1];
            content = match[2] || "";
        } else {
            user = p.u;
            content = rcon;
        }
    } else {
        if (p.u === "Webhooks") {
            const rcon = p.p;
            const parts = rcon.split(': ');
            user = parts[0];
            content = parts.slice(1).join(': ');
        } else {
            content = p.p;
            user = p.u;
        }
    }
    
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.setAttribute("tabindex", "0");

    const ba = Object.keys(blockedWords);
    const bc = ba.some(word => {
        const regex = new RegExp('\\b' + word + '\\b', 'i');
        return regex.test(content);
    });

    if (bc) {
        if (settingsstuff().censorwords) {
            content = content.replace(new RegExp('\\b(' + ba.join('|') + ')\\b', 'gi'), match => '*'.repeat(match.length));
        } else {
            if (settingsstuff().blockedmessages) {
                postContainer.setAttribute("style", "display:none;");
            } else {
                postContainer.classList.add("blocked");
            }
        }
    }
    
    if (blockedUsers.hasOwnProperty(user)) {
        if (settingsstuff().blockedmessages) {
            postContainer.setAttribute("style", "display:none;");
        } else {
            postContainer.classList.add("blocked");
        }
    }

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapper");

    const pfpDiv = document.createElement("div");
    pfpDiv.classList.add("pfp");
    
    if (p.post_origin !== "livechat") {
        postContainer.appendChild(createButtonContainer(p));
        
        const mobileButtonContainer = document.createElement("div");
        mobileButtonContainer.classList.add("mobileContainer");
        mobileButtonContainer.innerHTML = `
        <div class='toolbarContainer'>
            ${p.post_origin !== 'inbox' ? `<div class='toolButton mobileButton' onclick='reply("${p._id}")' aria-label="reply" title="reply" tabindex="0">
                <svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z' fill='currentColor'></path></svg>
            </div>` : ''}
            <div class='toolButton mobileButton' onclick='openModal("${p._id}");'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clip-rule="evenodd" class=""></path></svg>
            </div>
        </div>
        `;
        postContainer.appendChild(mobileButtonContainer);
    }

    const pstdte = document.createElement("i");
    pstdte.classList.add("date");
    tsr = p.t.e;
    tsra = tsr * 1000;
    tsrb = Math.trunc(tsra);
    const ts = new Date();
    ts.setTime(tsrb);
    pstdte.innerText = new Date(tsrb).toLocaleString([], { month: '2-digit', day: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric' });

    const pstinf = document.createElement("span");
    pstinf.classList.add("user-header")
    pstinf.innerHTML = `<span id='username' onclick='openUsrModal("${user}")' data-user-title='${user}'>${user}</span>`;

    if (bridged || p.u == "Webhooks") {
        const bridged = document.createElement("bridge");
        bridged.innerText = lang().meo_bridged.start;
        bridged.setAttribute("title", lang().meo_bridged.title);
        pstinf.appendChild(bridged);
    }
    
    pstinf.appendChild(pstdte);
    wrapperDiv.appendChild(pstinf);

    const roarer = /@([\w-]+)\s+"([^"]*)"\s+\(([^)]+)\)/g;
    const bettermeower = /@([\w-]+)\[([a-zA-Z0-9]+)\]/g;


    let matches1 = [...content.matchAll(roarer)];
    let matches2 = [...content.matchAll(bettermeower)];

    let allMatches = matches1.concat(matches2);

    if (allMatches.length > 0) {
        const replyIds = allMatches.map(match => match[3] || match[2]);
        const pageContainer = document.getElementById("msgs");

        if (pageContainer.firstChild) {
            pageContainer.insertBefore(postContainer, pageContainer.firstChild);
        } else {
            pageContainer.appendChild(postContainer);
        }

        loadreplies(p.post_origin, replyIds).then(replyContainers => {
            replyContainers.forEach(replyContainer => {
                pstinf.after(replyContainer);
            });
        });

        allMatches.forEach(match => {
            content = content.replace(match[0], '').trim();
        });
    }

    const repliesContainer = document.createElement("div");
    p.reply_to.forEach((item) => repliesContainer.appendChild(loadreplyv(item)));
    pstinf.after(repliesContainer);

    let postContentText = document.createElement("p");
    postContentText.className = "post-content";
    // tysm tni <3
    if (typeof md !== 'undefined') {
        md.disable(['image']);
        postContentText.innerHTML = erimd(md.render(content));
        postContentText.innerHTML = meowerEmojis(postContentText.innerHTML, p.emojis || []);
        postContentText.innerHTML = buttonbadges(postContentText);
    } else {
        // fallback for when md doenst work
        // figure this issue OUT
        postContentText.innerHTML = oldMarkdown(content);
        console.error("Parsed with old markdown, fix later :)")
    }
    const emojiRgx = /^(?:(?!\d)(?:\p{Emoji}|[\u200d\ufe0f\u{E0061}-\u{E007A}\u{E007F}]))+$/u;
    const meowerRgx = /^<:[a-zA-Z0-9]{24}>$/g;
    const discordRgx = /^<(a)?:\w+:\d+>$/gi;
    if (emojiRgx.test(content) || (meowerRgx.test(content) && p.emojis.length) || discordRgx.test(content)) {
        postContentText.classList.add('big');
    }
    
    if (content) {
        wrapperDiv.appendChild(postContentText);
    }

    const links = content.match(/(?:https?|ftp):\/\/[^\s(){}[\]]+/g);
    const embd = embed(links);
    if (embd || p.attachments) {
        const embedsDiv = document.createElement('div');
        embedsDiv.classList.add('embeds');
        if (embd) {
            embd.forEach(embeddedElement => {
                embedsDiv.appendChild(embeddedElement);
            });
        }

        p.attachments.forEach(attachment => {
            const g = attach(attachment);
            embedsDiv.appendChild(g);
        });
    
        wrapperDiv.appendChild(embedsDiv);
    }
    
    if (p.reactions.length > 0) {
        const reactionsContainer = document.createElement("div");
        reactionsContainer.style = `
            width: 100%;
            height: 50px;
            padding: 2px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 5px;
        `;
        p.reactions.forEach(r => {
            const reaction = document.createElement("div");
            reaction.style = `
                height: 20px;
                border-radius: 5px;
                padding: 8px;
                border: var(${r.user_reacted ? "--primary" : "--accent-down"}) 2px solid;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--accent-color);
                transition-duration: 0.3s;
                cursor: pointer;
            `
            reaction.innerText = `${r.emoji} ${r.count}`;
            reaction.addEventListener("click", ()=>{
                r.count = r.user_reacted ? r.count - 1 : r.count + 1;
                r.user_reacted = !r.user_reacted;
                if (r.user_reacted) {
                    fetch(`https://api.meower.org/posts/${p._id}/reactions/${encodeURIComponent(r.emoji)}`, {
                        method: "POST",
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    });
                } else {
                    fetch(`https://api.meower.org/posts/${p._id}/reactions/${encodeURIComponent(r.emoji)}/@me`, {
                        method: "DELETE",
                        headers: {
                            token: localStorage.getItem("token")
                        }
                    });
                }
                reaction.style.border = `var(${r.user_reacted ? "--primary" : "--accent-down"}) 2px solid`;
                reaction.innerText = `${r.emoji} ${r.count}`;
                if (r.count == 0) { reaction.remove(); }
                if (reactionsContainer.children.length < 1) { reactionsContainer.remove(); }
            })
            reactionsContainer.appendChild(reaction);
        })
        wrapperDiv.appendChild(reactionsContainer);
    }
    
    postContainer.appendChild(wrapperDiv);

    loadPfp(user, p.author, 0)
        .then(pfpElement => {
            if (pfpElement) {
                pfpDiv.appendChild(pfpElement);
                pfpCache[user] = pfpElement.cloneNode(true);
                postContainer.insertBefore(pfpDiv, wrapperDiv);
            }
        });

    const placeholder = document.getElementById(`placeholder-${p.nonce}`);
    if (placeholder) placeholder.remove();

    const pageContainer = document.getElementById("msgs");
    const existingPost = document.getElementById(p._id);
    postContainer.id = p._id;
    if (existingPost) {
        existingPost.replaceWith(postContainer);
    } else if (pageContainer.firstChild && p._top) {
        pageContainer.insertBefore(postContainer, pageContainer.firstChild);
    } else {
        pageContainer.appendChild(postContainer);
    }
}

function loadReactionPicker(postId) {
    const post = document.getElementById(postId);
    if (!post.getElementsByClassName("mobileContainer")[0].getElementsByClassName("toolbarContainer")[0].getElementsByClassName("picker")[0]) {
        const picker = document.createElement("div")
        picker.classList.add("picker");
        picker.style = `
            width: 170px;
            height: 100px;
            background: var(--accent-color);
            position: absolute;
            top: 30px;
            right: 0px;
            padding: 5px;
            border-radius: 10px;
            border: var(--primary) 2px solid;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            z-index: 1;
            gap: 2px;
        `;
        const emojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","😭","😉","😗","😙","😚","😘","😍"];
        emojis.forEach(emoji => {
            const ebtn = document.createElement("button");
            ebtn.style = `
                width: 30px;
                height: 30px;
                background: var(--accent-down);
            `;
            ebtn.innerText = emoji;
            ebtn.addEventListener("click", ()=>{
                fetch(`https://api.meower.org/posts/${postId}/reactions/${encodeURIComponent(emoji)}`, {
                    method: "POST",
                    headers: {
                        token: localStorage.getItem("token")
                    }
                }).then(async ()=>{
                    const replyresp = await fetch(`https://api.meower.org/posts?id=${postId}`, {
                        headers: { token: localStorage.getItem("token") }
                    });
                    loadpost(await replyresp.json());
                    picker.remove();
                });
            })
            picker.appendChild(ebtn);
        })
        post.getElementsByClassName("mobileContainer")[0].getElementsByClassName("toolbarContainer")[0].appendChild(picker);
    }
    
    closemodal();
}

function loadReactionPickerPc(postId) {
    const post = document.getElementById(postId);
    if (!post.getElementsByClassName("buttonContainer")[0].getElementsByClassName("toolbarContainer")[0].getElementsByClassName("picker")[0]) {
        const picker = document.createElement("div")
        picker.classList.add("picker");
        picker.style = `
            width: 170px;
            height: 100px;
            background: var(--accent-color);
            position: absolute;
            top: 30px;
            right: 0px;
            padding: 5px;
            border-radius: 10px;
            border: var(--primary) 2px solid;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            z-index: 1;
            gap: 2px;
        `;
        const emojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","😭","😉","😗","😙","😚","😘","😍"];
        emojis.forEach(emoji => {
            const ebtn = document.createElement("button");
            ebtn.style = `
                width: 30px;
                height: 30px;
                background: var(--accent-down);
            `;
            ebtn.innerText = emoji;
            ebtn.addEventListener("click", ()=>{
                fetch(`https://api.meower.org/posts/${postId}/reactions/${encodeURIComponent(emoji)}`, {
                    method: "POST",
                    headers: {
                        token: localStorage.getItem("token")
                    }
                }).then(async ()=>{
                    const replyresp = await fetch(`https://api.meower.org/posts?id=${postId}`, {
                        headers: { token: localStorage.getItem("token") }
                    });
                    loadpost(await replyresp.json());
                    picker.remove();
                });
            })
            picker.appendChild(ebtn);
        })
        post.getElementsByClassName("buttonContainer")[0].getElementsByClassName("toolbarContainer")[0].appendChild(picker);
    }
    
    closemodal();
}

function openModal(postId) {
    document.documentElement.style.overflow = "hidden";
    const mdlbck = document.querySelector('.modal-back');
    
    const post = postCache[page].find(_post => _post._id === postId);

    if (mdlbck) {
        mdlbck.style.display = 'flex';
        
        const mdl = mdlbck.querySelector('.modal');
        if (mdl) {
            mdl.id = postId;
            let mdbt = mdl.querySelector('.modal-bottom');
            if (mdbt) {
                mdbt.innerHTML = `
                <button class="modal-back-btn" onclick="openModModal();">${lang().action.back}</button>
                `;
            }
            const mdlt = mdl.querySelector('.modal-top');
            if (mdlt) {
                mdlt.innerHTML = `${post.post_origin !== 'inbox' ? `
                <button class="modal-button" onclick="reply('${postId}')"><div>${lang().action.reply}</div><div class="modal-icon"><svg class="icon_d1ac81" width="24" height="24" viewBox="0 0 24 24"><path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor"></path></svg></div></button>
                <button class="modal-button" onclick="mdlpingusr(event)"><div>${lang().action.mention}</div><div class="modal-icon"><svg class="icon" height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg></div></button>
                <button class="modal-button" onclick="reportModal(event)"><div>${lang().action.report}</div><div class="modal-icon"><svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 6.00201H14V3.00201C14 2.45001 13.553 2.00201 13 2.00201H4C3.447 2.00201 3 2.45001 3 3.00201V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.00201C21 6.45001 20.553 6.00201 20 6.00201Z"></path></svg></div></button>      
                ` : ''}
                <button class="modal-button" onclick="mdlshare(event)"><div>${lang().action.share}</div><div class="modal-icon"><svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path d="M12.9297 3.25007C12.7343 3.05261 12.4154 3.05226 12.2196 3.24928L11.5746 3.89824C11.3811 4.09297 11.3808 4.40733 11.5739 4.60245L16.5685 9.64824C16.7614 9.84309 16.7614 10.1569 16.5685 10.3517L11.5739 15.3975C11.3808 15.5927 11.3811 15.907 11.5746 16.1017L12.2196 16.7507C12.4154 16.9477 12.7343 16.9474 12.9297 16.7499L19.2604 10.3517C19.4532 10.1568 19.4532 9.84314 19.2604 9.64832L12.9297 3.25007Z"></path><path d="M8.42616 4.60245C8.6193 4.40733 8.61898 4.09297 8.42545 3.89824L7.78047 3.24928C7.58466 3.05226 7.26578 3.05261 7.07041 3.25007L0.739669 9.64832C0.5469 9.84314 0.546901 10.1568 0.739669 10.3517L7.07041 16.7499C7.26578 16.9474 7.58465 16.9477 7.78047 16.7507L8.42545 16.1017C8.61898 15.907 8.6193 15.5927 8.42616 15.3975L3.43155 10.3517C3.23869 10.1569 3.23869 9.84309 3.43155 9.64824L8.42616 4.60245Z"></path></svg></div></button>      
                <button class="modal-button" onclick="loadReactionPicker('${postId}')"><div>React</div><div class="modal-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.77778C4 9.77778 5.33333 10.2222 8 10.2222C10.6667 10.2222 12 9.77778 12 9.77778C12 9.77778 11.1111 11.5556 8 11.5556C4.88889 11.5556 4 9.77778 4 9.77778Z" fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4184 12.4183 16 8 16C3.58171 16 0 12.4184 0 8C0 3.5816 3.58171 0 8 0C12.4183 0 16 3.5816 16 8ZM8 9.33377C6.38976 9.33377 5.32134 9.14627 4 8.88932C3.69824 8.83116 3.11111 8.88932 3.11111 9.77821C3.11111 11.556 5.15332 13.7782 8 13.7782C10.8462 13.7782 12.8889 11.556 12.8889 9.77821C12.8889 8.88932 12.3018 8.83073 12 8.88932C10.6787 9.14627 9.61024 9.33377 8 9.33377ZM5.33333 7.55556C5.94699 7.55556 6.44444 6.85894 6.44444 6C6.44444 5.14106 5.94699 4.44444 5.33333 4.44444C4.71967 4.44444 4.22222 5.14106 4.22222 6C4.22222 6.85894 4.71967 7.55556 5.33333 7.55556ZM11.7778 6C11.7778 6.85894 11.2803 7.55556 10.6667 7.55556C10.053 7.55556 9.55556 6.85894 9.55556 6C9.55556 5.14106 10.053 4.44444 10.6667 4.44444C11.2803 4.44444 11.7778 5.14106 11.7778 6Z" fill="currentColor"></path>
                </svg></div></button>      
                    `; 
                }

                if (localStorage.getItem("permissions") === "1") {
                    mdlt.innerHTML += `
                    <button class="modal-button" onclick="modPostModal('${postId}')"><div>${lang().action.mod}</div><div class="modal-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"></path></svg></div></button>      
                `;

                const postDiv = document.getElementById(postId);
                const usernameElement = postDiv.querySelector('#username').innerText;

                if (usernameElement === localStorage.getItem("username") && post.post_origin !== 'inbox') {
                    mdlt.innerHTML += `
                    <button class="modal-button" onclick="deletePost('${postId}')"><div>${lang().action.delete}</div><div class="modal-icon"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg></div></button>      
                    <button class="modal-button" onclick="editPost('${page}', '${postId}')"><div>${lang().action.edit}</div><div class="modal-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor"></path></svg></div></button>                    
                    `; 
                }
            }
            mdbt = mdl.querySelector('.modal-bottom');
            if (mdbt) {
                mdbt.innerHTML = ``;
            }
        }
    }  
}

