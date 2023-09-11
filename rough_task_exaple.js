 //     const processData = () => {
    //       const ls = menu.reduce((acc, item) => {
    //         const aw = item["menu-items"].map((aws) => {
    //           return [aws.name, aws.description];
    //         });
    //         return [...acc, ...aw];
    //       }, []);
  
    
    // useEffect(() => {
    //     const processData = () => {
    //         console.log("menu of the ",menu)
    //       const st = menu.map((item) => item["menu-items"]);
    //       console.log("st values",st)
          // const ls = st.map((item) => {

          //   // console.log("items are",item.name);
    //         const aw = [];
    //         const dt = item.map((aws) => {
    //           const dr = [];
    //           const s1 = aws["name"];
    //           const s2 = aws["description"];
    //           dr.push(s1);
    //           aw.push(s2);
    //         });
    //         return aw;
    //       });
      
    //       setItems(ls);
    //     };
      
    //     processData();
    //   }, [menu]);
      
    //   console.log("g", items);
      
    // ----------1
    // useEffect(() => {
    //     const processData = () => {
    //       const st = menu.map((item) => item["menu-items"]);
    //       console.log("menu items",st)
    //     //   const ls = st.reduce((acc, item) => {
    //     //     item.forEach((aws) => {
    //     //         // Access "name" and "description" properties and add them to the accumulator array
    //     //         acc.push({ name: aws["name"], description: aws["description"] });
    //     //   });
    //     // }
    //     const flattenedArray = st.reduce((acc, item) => {
    //         item.forEach((aws) => {
    //           // Access "name" and "description" properties and add them to the accumulator array
    //           acc.push({ name: aws["name"], description: aws["description"] });
    //         });
    //         return acc;
    //       }, []);
      
    //       setItems(flattenedArray);
    //     };
    
    //     processData();
    //   }, [menu]);

    //   console.log("g", items);

// -------------2
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await api.get('/array');
    //         console.log(response.data['categorys']);
    //         setMenu(response.data['categorys']);
    //       } catch (err) {
    //         console.log(err.stack);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
    
    useEffect(() => {
        // const st = menu.map((item) => item["menu-items"]);
        // console.log("st values",st)
        // const lsq = st.map((item) => {
        //   console.log("items are",item);
        //   const st = menu.map((item) => item["menu-items"]);
        //   //       console.log("st values",st)
        //         // const ls = st.map((item) => {
      
        //         //   // console.log("items are",item.name);
        //   //         const aw = [];
        //   //         const dt = item.map((aws) => {
        //   //           const dr = [];
        //   //           const s1 = aws["name"];
        //   //           const s2 = aws["description"];
        //   //           dr.push(s1);
        // })
      const processData = () => {
        const ls = menu.reduce((acc, item) => {
          console.log("Single items",item)
          console.log(item["menu-items"])
          const aw = item["menu-items"].map((aws) => {
            const price_item =aws["sub-items"].map((sub_item)=>{
              return [sub_item["name"],sub_item["price"]]
            })
            return [aws.name, aws.description,price_item];
            
          });

          return [...acc, ...aw];
        }, []);
        setItems(ls);
      };
  
      processData();
    }, [menu]);
  
    console.log("gi", items);