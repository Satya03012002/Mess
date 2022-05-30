import mongoose from "mongoose";

const fooddata = new mongoose.Schema({
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "AdminData",
    },
  ],

  Sunday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique:true
          },
        //   date: {
        //     type: Date,
        //     default: Date.now(),
        //   },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },

      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:1,2:1,3:1,4:1,5:1}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },

      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },

    daykey: {
      type: String,
      default: "Sunday",
    },
  },

  Monday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        ddefault:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    key: {
      type: String,
      default: "Monday",
    },
  },
  Tuesday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    daykey: {
      type: String,
      default: "Tuesday",
    },
  },

  Wednesday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    daykey: {
      type: String,
      default: "Wednesday",
    },
  },

  Thrusday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    daykey: {
      type: String,
      default: "Thrusday",
    },
  },
  Friday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    daykey: {
      type: String,
      default: "Friday",
    },
  },

  Saturday: {
    BreakFast: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "BreakFast",
      },
    },

    Lunch: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: "Lunch",
      },
    },

    Dinner: {
      menu: {
        type: String,
        default: "",
      },
      Like: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      Dislike: [
        {
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
            unique: true,
          },
        },
      ],
      comment: [
        {
          feedback: {
            type: String,
            default: "",
          },
          user: {
            type: mongoose.Types.ObjectId,
            ref: "UserData",
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
      image: {
        type: String,
        default: "",
      },
      Userratings:[{

        rating:{
        type:mongoose.Mixed,
        1:Number,
        2:Number,
        3:Number,
        4:Number,
        5:Number,
        

        default:{1:0,2:0,3:0,4:0,5:0}
        
        },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "UserData",
      }
    }
    ],
    finalrating:{
      type:Number,
      default:0
      
      
    },
      key: {
        type: String,
        default: " Dinner",
      },
    },
    daykey: {
        type: String,
        default: "Saturday",
      },
  }
  
});


const FoodData = new mongoose.model("FoodData", fooddata);
export default FoodData;