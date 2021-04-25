 var Slider = function(Element, Data)
    {
        this.Element = Element;
        this.Data = Data;
        
        this.Initialize();
    } 
    
    Slider.prototype = 
    {
        GetAttribute : function(Name)
        {
            return this.Element.getAttribute(Name);
        },
        
        Initialize : function()
        {
            this.Init();
        },
        
        Init : function()
        {
            this.Element = typeof(this.Element) == "string" ? document.getElementById(this.Element) : this.Element;
            this.Element.style.display = "none";
            
            this.SliderInterval = parseInt(this.GetAttribute("SliderInterval"))
            
            this.ImageWidth  = parseInt(this.GetAttribute("ImageWidth"));
            this.ImageHeight = parseInt(this.GetAttribute("ImageHeight"));
            this.DescriptionHeight = parseInt(this.GetAttribute("DescriptionHeight"));
            
            this.Width = this.ImageWidth;
            this.Height = parseInt(this.ImageHeight) + this.DescriptionHeight;
            
            this.Element.style.width = this.Width + 'px';
            this.Element.style.height = this.Height + 'px';
            
            this.Element.style.display = "";
        },
        
        Load : function()
        {
            this.LoadImages();
            this.CreateImage();
            this.CreateDescription();
            this.CreateNavigators();
        },
        
        LoadImages : function()
        {
            if(this.Data)
            {
                for(var i = 0; i < this.Data.length; i++)
                {
                    this.Data[i].Index = i;
                    var Img = new Image();
                    Img.src = this.Data[i].ImageUrl;
                }
            }
        },
        
        Show : function()
        {
            this.Load();
        
            this.CurrentIndex = -1;
            this.Interval = null;
            this.IsFirst = true;
            
            if(this.Data && this.Data.length > 0)
            {
                this.PlayItems();
                this.Start();
                this.IsFirst = false;
            }
        },
        
        CreateImage : function()
        {
            var ImageLink = document.createElement("A");
            ImageLink.id = this.Element.id + "_ImageLink";
            ImageLink.target = "_blank";
                   
            this.Element.appendChild(ImageLink);
            this.ImageLink = document.getElementById(ImageLink.id);

            
            var Image = document.createElement("IMG");
            Image.id = this.Element.id + "_Image";
            Image.style.width = this.ImageWidth + 'px';
            Image.style.height = this.ImageHeight + 'px';            
            Image.style.border = "0";
            this.ImageLink.appendChild(Image);
            this.Image = document.getElementById(Image.id);
            
            this.Image.className = "Image";
            this.CanNavigate = true;
        },
        
        CreateDescription : function()
        {
            var Desc = document.createElement("DIV");
            Desc.id = this.Element.id + "_Desc";
            Desc.style.width = this.ImageWidth + 'px';
            Desc.style.height = this.DescriptionHeight + 'px';
            this.Element.appendChild(Desc);
            
            this.Description = document.getElementById(Desc.id);
            this.Description.className = "Description";
            
            var Link = document.createElement("A");
            Link.id = this.Element.id + "_Desc_Link";
            Link.target = "_blank";
            this.Description.appendChild(Link);
            
            this.Description.Link = document.getElementById(Link.id);
            this.Description.Link.appendChild(document.createTextNode("Loading ..."));
			if(this.DescriptionHeight<=0) this.Description.Link.style.display = 'none';
        },
        
        CreateNavigators : function()
        {
            var NavContainer = document.createElement("DIV");
            NavContainer.id = this.Element.id + "_Nav";            
            
            this.Element.parentNode.appendChild(NavContainer);
            this.NavContainer = document.getElementById(NavContainer.id);
            this.NavContainer.className = "SliderNav";

            for(var i = 0; i < this.Data.length; i++)
            {
                var Nav = document.createElement("DIV");
                Nav.appendChild(document.createTextNode(i+1));
                Nav.Index = i;
                Nav.onclick = this.Bind(this, this.NavClick);
                Nav.title = this.Data[i].Text;
                Nav.className = "";
                this.NavContainer.appendChild(Nav);
            }
            
        },
        
        Start : function()
        {
            if(this.Data.length > 1)
            {
                this.Interval = setInterval(this.Bind(this, this.PlayItems), this.SliderInterval);            
            }
        },
        
        Stop : function()
        {
            clearInterval(this.Interval);  
        },
        
        Reset : function()
        {
            this.Stop();
            this.Start();
        },
        
        PlayItems : function()
        {
            if(this.CurrentIndex < this.Data.length - 1)
            {
                this.CurrentIndex++;
            }
            
            this.CurrentItem = this.Data[this.CurrentIndex];
            this.PlayItem();
            
            if(this.CurrentIndex == this.Data.length - 1)
            {
                this.CurrentIndex = -1;
            }
        },
        
        PlayItem : function()
        {
            this.PlayImage();
            this.PlayDescription(); 
            this.PlayNav();
        },
        
        PlayDescription : function()
        {
            if(this.Description.Link.firstChild)
            {
                this.Description.Link.removeChild(this.Description.Link.firstChild);
            }
            
            this.Description.Link.appendChild(document.createTextNode(this.CurrentItem.Text));
            
			if(this.CurrentItem.NavigateUrl != "")
			{
			    this.ImageLink.href = this.CurrentItem.NavigateUrl;
				this.Description.Link.href = this.CurrentItem.NavigateUrl;
			}
			else
			{
			    this.ImageLink.removeAttribute("href");
				this.Description.Link.removeAttribute("href");
			}
        },
        
        PlayImage : function()
        {
            var UserFilter = false;
            try
            {
                UserFilter =  !this.IsFirst && document.all && this.Image.filters.revealTrans;
            }
            catch(e){}
            
            if(UserFilter)
            {
                this.Image.filters.revealTrans.Transition=Math.floor(Math.random()*23); 
                this.Image.filters.revealTrans.apply();
            }
            
            this.Image.src = this.CurrentItem.ImageUrl;
            this.Image.alt = this.Image.title = this.CurrentItem.Text;

            if(this.CurrentItem.NavigateUrl == "")
            {
                this.CanNavigate = false;
                this.Image.style.cursor = "default";
            }
            else
            {
                this.CanNavigate = true;
                this.Image.style.cursor = "pointer";
            }

            if(UserFilter)
            {
                this.Image.filters.revealTrans.play(); 
            }
        },
        
        PlayNav : function()
        {
            var Position = this.CalcPosition(this.Element);
            if(this.IsFirst) 
            {
                this.NavContainerOffsetWidth = this.NavContainer.offsetWidth;
                this.NavContainerOffsetHeight = this.NavContainer.offsetHeight;
            }

            this.NavContainer.style.width = this.NavContainerOffsetWidth + 'px';
            this.NavContainer.style.height = this.NavContainerOffsetHeight + 'px';
            this.NavContainer.style.left = Position[0] + this.ImageWidth - this.NavContainerOffsetWidth + 'px';
            this.NavContainer.style.top = Position[1] + this.ImageHeight - this.NavContainerOffsetHeight + 'px';
            
            for(var i = 0; i < this.NavContainer.childNodes.length; i++)
            {
                if(i == this.CurrentItem.Index)
                {
                    this.NavContainer.childNodes[i].className = "CurrentItem";
                }
                else
                {
                    this.NavContainer.childNodes[i].className = "";
                }
            }
        },
        
        NavClick : function(e)
        {
            if(!e) e = event;
            var srcEle = e.srcElement ? e.srcElement : e.target;
            this.CurrentIndex = srcEle.Index - 1;
            this.Reset();
            
            this.PlayItems();
        },
        
        Bind: function(oThis, Func) 
        {
            return function() {Func.apply(oThis, arguments);};
        },
        
        CalcPosition: function(element) 
        {
            var valueT = 0, valueL = 0;
            do {
                valueT += element.offsetTop  || 0;
                valueL += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
            return [valueL, valueT];
        }
    };
